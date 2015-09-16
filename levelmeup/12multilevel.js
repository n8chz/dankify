const net = require("net");
const multilevel = require("multilevel");


var db = multilevel.client();
var connection = net.connect(4545);

connection.pipe(db.createRpcStream()).pipe(connection);

db.get("multilevelmeup", function (error, data) {
  if (error) {
   console.log(JSON.stringify(error));
  }
  else {
   console.log(data);
   // connection.push(data);
   connection.end();
  }
});

/*

Write a program that uses multilevel to fetch a value from a server
running on your computer.

Create a TCP connection with the core `net` module to port 4545
on localhost. Pipe this connection through a multilevel RPC stream and
back to the connection. Your code should look like:

  var db = multilevel.client()
  var connection = net.connect(4545)
  connection.pipe(db.createRpcStream()).pipe(connection)

You will then have a `db` object that you can interact with like a
LevelUP object.

Fetch the value from the data store with the key 'multilevelmeup'
and print it to the console.

You must close the connection after you have fetched the value!

  connection.end()

----------------------------------------------------------------------
HINTS:

Read more about multilevel here:
  http://npm.im/multilevel
Or off-line on your local filesystem:
  /usr/local/lib/node_modules/levelmeup/docs/multilevel.html

You will need to `npm install multilevel` to get started with this
exercise.

If you don't have an Internet connection, simply make a `node_modules`
directory and copy the following directory into it:
  /usr/local/lib/node_modules/levelmeup/node_modules/multilevel/

*/

