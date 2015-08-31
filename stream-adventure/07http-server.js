const http = require("http");
const through = require("through2");

var server = http.createServer(function (req, res) {
    req.pipe(through(function (buf, _, next) {
        this.push(buf.toString().toUpperCase());
        next();
    })).pipe(res);
    // res.end();
    /*
    req.on("data", function (chunk) {
    });
    res.end();
    */
});

server.listen(process.argv[2]);

