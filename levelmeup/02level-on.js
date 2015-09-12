const level = require("level");


var args = process.argv;
var dir = args[2];
var key = args[3];
var db = level(dir);

db.get(key, function (err, val) {
  console.log(val);
});


/*

Write a program that opens a `level` directory and reads a key from it.

Your program should take two arguments, a LevelDB directory, and a key.
your program should then retrive the value of that key, and write it to the console.

for example, if `database_dir` contains a record `foo => bar` then the command
`node levelread.js database_dir foo` should output `bar`.

----------------------------------------------------------------------
HINTS:

`level` is a package that bundles both `levelup`, the Node-friendly
data-store API and `leveldown`, the low-level LevelDB binding.

Read more about Level and LevelUP:
  http://npm.im/levelup
Or off-line on your local filesystem:
  /usr/local/lib/node_modules/levelmeup/docs/levelup.html

You will need to `npm install level` to get started with this
exercise.

If you don't have an Internet connection, simply make a `node_modules`
directory and copy the following directory into it:
  /usr/local/lib/node_modules/levelmeup/node_modules/level/

You can open an existing data-store, or create a new one, by invoking
`level()` and passing in a path to a directory. The function returns
a new LevelUP instance.

All LevelUP methods are asynchronous. To get a value out of the
data-store, use the `.get(key, callback)` method:

  var level = require('level')
  var db = level('/path/to/db/')
  db.get('foo', function (err, value) {
    console.log('foo =', value)
  })


*/

