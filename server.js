const http = require("http");
const todos = require("./db");
const moment = require("moment");

function test(req, res) {
    const birthday = "2006-12-15";
    const formattedDate = moment().format('MMMM Do YYYY, h:mm:ss a');
res.writeHead(200, {"content-type": "text/html"});
res.end(formattedDate.toString());
}

http.createServer(test).listen(8080);
