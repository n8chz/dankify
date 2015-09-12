const level = require("level");


var args = process.argv;
var dir = args[2];
var db = level(dir);
var obj = JSON.parse(args[3]);

Object.keys(obj).forEach(function (key) {
  db.put(key, obj[key]);
});

/*

Write a program that opens a LevelDB data-store using `level`.

The full path to the data-store will be provided to your program as
the first command-line argument.

The second command-line argument is a string containing a complete
JSON-encoded object. Parse this object and put each property of
the object into your data-store where the property name is the entry's
key and the property value is the entry's value.

Your solution will be verified by reading the data-store and checking
against the object that was provided to you.

----------------------------------------------------------------------
HINTS:

The `put()` method in LevelUP is very simple, you just need to supply
the key and value. An optional callback may be passed if you need
to know when the data has been committed to the store or to
properly catch any errors (otherwise errors will be thrown):

  var db = level('/path/to/db/')
  db.put('foo', 'bar', function (err) {
    if (err)
      return console.error('Error in put():', err)
    console.error('put foo = bar')
  })

You may also call `db.close()` after all your callbacks have returned,
however this is optional as the data-store will be automatically
closed when your program exits. An open LevelDB store will not keep
your program running indefinitely.

To get output for debugging when running `levelmeup run program.js`
you should use console.error instead of console.log.

 » To print these instructions again, run: `levelmeup print`.
 » To execute your program in a test environment, run:
   `levelmeup run program.js`.
 » To verify your program, run: `levelmeup verify program.js`.
 » For help with this problem or with levelmeup, run:
   `levelmeup help`.

*/

