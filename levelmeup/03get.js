const level = require("level");


var args = process.argv;
var dir = args[2];
var db = level(dir);
var n = 0;
var result = new Array(101);

function iterate (n) {
 db.get("key"+n, function (err, value) {
   if (!err) {
    console.log("key"+n+"="+value);
   }
 });
 if (n <= 100) iterate(n+1);
}

iterate(0);

/*

for (var n = 0; n <= 100; n++) {
 db.get("key"+n, function (err, value) {
   if (!err) result[n] = value;
 });
}

*/

/*

Write a program that opens a LevelDB data-store using `level`.

The store will contain up to 10 entries with keys in the form:

  keyX

Where 'X' is an integer between 0 and 100.

You must find those entries and print them out to the console, ordered
by 'X', ascending. You should print them out with:

  console.log(key + '=' + value)
  // will output "key12=here is that random text"

The full path to the data-store will be provided to your program as
the first command-line argument.

----------------------------------------------------------------------
HINTS:

When you perform a `.get()` operation, if the entry does not exist
your callback will receive an error object as the first argument.

It is also possible to receive I/O errors but you can differentiate
a `NotFoundError` by checking `err.type == 'NotFoundError'` or by
checking for a `err.notFound` boolean.

Using `.get()` is recommended for this exercise but if you're tempted
to use a ReadStream to solve this problem, beware that the sorting
may be a problem.


 » To print these instructions again, run: `levelmeup print`.
 » To execute your program in a test environment, run:
   `levelmeup run program.js`.
 » To verify your program, run: `levelmeup verify program.js`.
 » For help with this problem or with levelmeup, run:
   `levelmeup help`.


*/

