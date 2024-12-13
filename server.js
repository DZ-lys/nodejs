const http = require("http");

function test(req, res) {
res.writeHead(200, {"content-type": "text/html"});
res.end("bfsad");
}

http.createServer(test).listen(8080);
