const http = require("http");
const fs = require("fs");


var server = http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end(fs.readFileSync(process.argv[3]).toString());
});

server.listen(process.argv[2]);

