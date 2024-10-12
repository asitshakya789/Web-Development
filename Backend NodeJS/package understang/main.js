const http = require('http');
const data = require("./data");
const port = 4500;

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify(data));
    res.end();
}).listen(port);

console.log(`Server is running at http://localhost:${port}`);