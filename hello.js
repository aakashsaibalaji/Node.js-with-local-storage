const http = require('node:http');
var fs = require('fs');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  fs.readFile('test.html',function(err,data){
    res.writeHead(200,{'Content-type':'text/html'});
    res.write(data)
    return res.end();
    })
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
}); 