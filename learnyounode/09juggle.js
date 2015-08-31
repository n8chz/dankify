const http = require("http");
const bl = require("/usr/local/lib/node_modules/learnyounode/node_modules/bl");

var args = process.argv.slice(2);

args.forEach(
    function (value, index, array) {
        // Note that inside the body of the function which is an
        // argument of http.get(), "this" will refer to a different
        // scope.
        var result = this;
        http.get(value, function (response) {
            response.pipe(bl(function (err, data) {
                result[index] = data.toString();
                // Once all the array cells are filled in with host
                // data, we are done:
                if (result.every(function (x) {
                    return x !== undefined;
                })) {
                    console.log(result.join("\n"));
                }
            }))
        });
    },
    // This is the "this" value parameter for .forEach().  We start
    // with an array of undefined.  Cells in this array become defined
    // as http.get() gets more buffers.  The exit condition is all
    // cells being defined (as in not undefined).
    new Array(this.length)
);

