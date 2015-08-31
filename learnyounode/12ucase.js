const http = require("http");
// const map = require("through2-map");


var server = http.createServer(function (request, response) {
    if (request.method != "POST") return -1;
    response.writeHead(200, {"Content-Type": "text/plain"});
    request.on("data", function (chunk) {
        response.write(chunk.toString().toUpperCase());
    }).on("end", function () {
        response.end();
    });
});

server.listen(process.argv[2]);

