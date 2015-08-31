var mymodule = require("./module.js");

mymodule(process.argv[2], process.argv[3], function (err, data) {
  // console.log("data: "+data);
  if (err) {
   console.log("error encountered");
  }
  else {
   data.forEach(function (fileName) {
     console.log(fileName);
   });
  }
});
