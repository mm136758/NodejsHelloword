'use strict';
var http = require('http');
var port = process.env.PORT || 1337;
var url = require('url');
const { route } = require('./router');

function start(route) {
    function onRequest(req, res) {
        var pathname = url.parse(req.url).pathname;
        console.log("request for " + pathname + "received");
        route(pathname);
        res.writeHead(200, { "Content-Type": "text/pain" });
        res.write("hello word");
        res.end();
    }
    

    http.createServer(onRequest).listen(8888);
        console.log("Server has started.");

    
}
exports.start = start;
