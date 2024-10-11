// Importing required moduconst 

const http = require('http');

http.createServer(function name(req , map) {
    map.write("hey i,m asit kumar");
    map.end();
}).listen(3000);
