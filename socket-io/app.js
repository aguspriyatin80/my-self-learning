// let http = require('http');
// let fs = require('fs');

// let handleRequest = (request, response) => {
//     response.writeHead(200, {
//         "Content-Type": "text/html"
//     });
//     fs.readFile("./index.html", null, function(error, data) {
//         if (error) {
//             response.writeHead(404);
//             response.write("Whoops! File not found");
//         } else {
//             response.write(data);
//         }
//         response.end();
//     });
// };

// http.createServer(handleRequest).listen(8000);

var express = require('express');
var app = express();
var path = require('path');
//viewed at http://localhost:8000
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + "/index.html"));
});
app.listen(8000)