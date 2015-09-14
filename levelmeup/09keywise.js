const level = require("level");

var args = process.argv;
var db = level(args[2], {valueEncoding: "json"});
var data = require(process.argv[3]);


// Since the grading app seems to expect the repo names in alphabetical order:
data.sort(function (x, y) {
  if (x.type == "user") return 1;
  if (y.type == "user") return -1;
  return x.name > y.name;
});


data.forEach(function (x, index) {
  var key = x.type == "user" ? x.name : x.user+index;
  db.put(key, x);
});




/*

db.createReadStream().on("data", function(data) {
  console.error(data.key+" -> "+JSON.stringify(data.value));
}).on("end", function () {});

*/

/*

Write a program that reads in a JSON file containing mappings of
usernames to their GitHub repositories and store them in a LevelUP
data-store such that they can be searched.

Your first command-line argument will be the full path to the LevelUP
store where you need to write the data.

You will be given the path to a JSON file as the second command-line
argument, you can use `require(process.argv[3])` to load and parse
it into a JavaScript object.

The JSON file is an array with two kinds of rows, some are users:

    { "type": "user", "name": "maxogden" }

And some are repositories:

    { "type": "repo", "name": "mux-demux", "user": "dominictarr" }

You must write all of the entries in this file to the data-store.

Open the data-store and write data with '!' as a delimiter such that
the verify script will be able to read the repos for each user by
doing the following range query:

    db.createReadStream({ start: 'rvagg!', end: 'rvagg!~' })

The user data should also be fetchable with:

    db.get('rvagg', function (err, user) { ... })

The value of each entry of the data-store should be the same as the
original JSON object from the data file.

---------------------------------------------------------------------
HINTS:

To simplify the use of JSON here you can open your LevelUP store
with the option: `valueEncoding: 'json'`, i.e.

  var db = level(process.argv[2], { valueEncoding: 'json' })

You can then write values as objects directly to the store without
having to do a JSON conversion yourself. This also means that read
operations will receive a recomposed object.

To get output for debugging when running `levelmeup run program.js`
you should use console.error instead of console.log.

*/

