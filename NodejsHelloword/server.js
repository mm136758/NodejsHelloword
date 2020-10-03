'use strict';
var http = require('http');
var port = process.env.PORT || 1337;
var url = require('url');
var test = require("./test_moudle");
var fs = require("fs");


const { route } = require('./router');

function start(route) {
    function onRequest(req, res) {
        
        var pathname = url.parse(req.url).pathname;
        console.log("request for " + pathname + "received");
        var q = url.parse(req.url, true).query;
        var txt = q.year + " " + q.month;
        route(pathname);
        res.writeHead(200, { "Content-Type": "text/pain" });
        res.write(txt);
        fs.readFile("Page1.html", function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
           
            
        });
    }
    

    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
    

    
}
exports.start = start;
