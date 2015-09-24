
var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/learnyoumongo";

MongoClient.connect(url, function (err, db) {
  if (err) throw (err);
  db.collection("parrots").count({age: {$gt : parseInt(process.argv[2])}}, function (err, count) {
    console.log(count);
    db.close();
  });
});



/*

Here we will learn how to count the number of documents that
meet certain criteria.

Use the parrots collection to count all documents where age
is greater than the first argument passed to your script.

Using console.log, print the number to stdout.

-------------------------------------------------------------------------------

## HINTS

To count the number of documents meeting certain criteria,
we must use the collection.count() function.

Here is an example:

    collection.count({
      name: 'foo'
    }, function(err, count) {
    
    })

If your program does not finish executing, you may have forgotten to
close the db. That can be done by calling db.close() after you
have finished.

*/
