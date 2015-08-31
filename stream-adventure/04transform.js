const through = require("through2");


var write = function (buffer, encoding, next) {
    var line = buffer.toString();
    if (line != "undefined") {
        this.push(line.toUpperCase());
    }
    next();
}


var stream = through(write);

process.stdin.pipe(stream).pipe(process.stdout);
