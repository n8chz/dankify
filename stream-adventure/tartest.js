const tar = require("tar");
const crypto = require("crypto");

var parse = tar.Parse();

parse.on("entry", function (entry) {
  entry.pipe(crypto.createHash("md5", {encoding: "hex"}));
});

process.stdin.pipe(parse);
