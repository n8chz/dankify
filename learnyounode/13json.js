const http = require("http");
const url = require("url");

var server = http.createServer(function (req, res) {
    
    var now = new Date();
    var value = {};
    // var pathInfo = req.url;
    var parsedQuery = url.parse(req.url, true);
    res.writeHead(200, {"Content-Type": "application/json"});
    
    if (parsedQuery.pathname == "/api/unixtime") {
        value.unixtime = ((new Date()).getTime());
        res.end(JSON.stringify(value));
    }
    else {
        var iso = parsedQuery.query.iso;
        if (iso) {
            var now = new Date(iso);
            value.hour = now.getHours();
            value.minute = now.getMinutes();
            value.second = now.getSeconds();
            console.log(JSON.stringify(value));
            res.end(JSON.stringify(value));
        }
        else {
            console.error(pathInfo);
        }
    }
});

server.listen(process.argv[2]);

