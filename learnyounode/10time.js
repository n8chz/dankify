const http = require("http");
const net = require("net");

var server = net.createServer(function (socket) {
    var now = new Date();
    now.setTime(now.getTime()-now.getTimezoneOffset()*60000);
    socket.end(now.toISOString().replace("T", " ").slice(0,16));
});

server.listen(process.argv[2]);

/*
setTimeout(function () {
    console.log(http.get(function (response) {
        response.setEncoding("utf8");
        response.on("error", console.error);
        response.on("data", console.log);
    }));
}, 1000);
*/
