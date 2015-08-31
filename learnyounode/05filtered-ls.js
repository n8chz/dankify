var fs = require("fs");
var args = process.argv.slice(2);

fs.readdir(args.shift(), function (err, data) {
  data.forEach(function (fileName) {
/*
    if (fileName.split(".").pop() == args[0]) {
     console.log(fileName);
    }
*/
    if (fileName.match(new RegExp("\."+args[0]+"$"))) {
     console.log(fileName);
    }
  });
});
