const http = require("http");
const bl = require("/usr/local/lib/node_modules/bl");

// console.log(process.argv[2]);

http.get(process.argv[2], function (response) {
        response.pipe(bl(function (err, data) {
            console.log(data.length);
            console.log(data.toString());
        }));
})

// console.log(bl.toString());
