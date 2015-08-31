process.stdin.pipe(require("request").post("http://localhost:8099")).pipe(process.stdout);
