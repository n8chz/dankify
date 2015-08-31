const concat = require("concat-stream");
const http = require("http");

process.stdin.pipe(concat(function (stream) {
    console.log(stream.toString().split("").reverse().join(""));
}));

