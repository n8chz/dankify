var fs = require("fs");
var bi = require("bi");

module.exports = function (dirName, ext, callback) {
 // console.log("module.exports("+dirName+", "+ext+", "+callback+")");
 fs.readdir(dirName, function (err, data) {
   // console.log("data: "+data);
   if (err) {
    return callback(err);
   }
   else {
    return callback(null, data.filter(function (fileName) {
      // console.log("fileName: "+fileName);
      return require("path").extname(fileName).slice(1) == ext;
    }));
   }
 });
}

