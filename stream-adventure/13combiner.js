const combine = require("stream-combiner");
const through2 = require("through2");
const zlib = require("zlib");

module.exports = function () {
    var value = {}, currentGenre;
    return combine(
	through2(
	    function (buf, _, next) {
		    // console.log(buf.toString());
		    if (buf.toString().match(/\S/)) {
			    // console.log(JSON.parse(buf).type);
			    switch (JSON.parse(buf).type) {
				    case "genre":
				    currentGenre = JSON.parse(buf).name;
				    value[currentGenre] = value[currentGenre] || {books: []};
				    break;
				    case "book":
				    value[currentGenre].books.push(JSON.parse(buf).name);
				    break;
				    default:
				    break;
			    }
		    }
		    next();
	    },
	    function (end) {
		    var that = this;
		    Object.keys(value).forEach(function (x) {
			that.push(JSON.stringify({
			    name: x,
			    books: value[x].books
			})+"\n");
		    });
		    end();
	    }	
	),
	zlib.createGzip()
    );
};

/*


Your program should generate a newline-separated list of JSON lines of genres,
each with a `"books"` array containing all the books in that genre. The input
above would yield the output:

    {"name":"cyberpunk","books":["Neuromancer","Snow Crash"]}
    {"name":"space opera","books":["A Deepness in the Sky","Void"]}

*/

/*

Write a module that returns a readable/writable stream using the
`stream-combiner` module. You can use this code to start with:

    var combine = require('stream-combiner')
    
    module.exports = function () {
        return combine(
            // read newline-separated json,
            // group books into genres,
            // then gzip the output
        )
    }
 
Your stream will be written a newline-separated JSON list of science fiction
genres and books. All the books after a `"type":"genre"` row belong in that
genre until the next `"type":"genre"` comes along in the output.

    {"type":"genre","name":"cyberpunk"}
    {"type":"book","name":"Neuromancer"}
    {"type":"book","name":"Snow Crash"}
    {"type":"genre","name":"space opera"}
    {"type":"book","name":"A Deepness in the Sky"}
    {"type":"book","name":"Void"}
    
Your program should generate a newline-separated list of JSON lines of genres,
each with a `"books"` array containing all the books in that genre. The input
above would yield the output:

    {"name":"cyberpunk","books":["Neuromancer","Snow Crash"]}
    {"name":"space opera","books":["A Deepness in the Sky","Void"]}

Your stream should take this list of JSON lines and gzip it with
`zlib.createGzip()`.

* HINTS *

The `stream-combiner` module creates a pipeline from a list of streams,
returning a single stream that exposes the first stream as the writable side and
the last stream as the readable side like the `duplexer` module, but with an
arbitrary number of streams in between. Unlike the `duplexer` module, each
stream is piped to the next. For example:

    var combine = require('stream-combiner');
    var stream = combine(a, b, c, d);
    
will internally do `a.pipe(b).pipe(c).pipe(d)` but the `stream` returned by
`combine()` has its writable side hooked into `a` and its readable side hooked
into `d`.

As in the previous LINES adventure, the `split` module is very handy here. You
can put a split stream directly into the stream-combiner pipeline.
Note that split can send empty lines too.

If you end up using `split` and `stream-combiner`, make sure to install them
into the directory where your solution file resides by doing:

    npm install stream-combiner split




*/
