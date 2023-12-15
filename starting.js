var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function(req,res){
    var inurl = url.parse(req.url,true);
    var filename = "."+inurl.pathname;
    fs.readFile(filename,(err,data)=>{
        if(err){
            res.writeHead(404,{'Content-Type':'text/html'})
            return res.end("404 page found here")
        }
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        res.end();
    })
}).listen(5500);