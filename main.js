const http = require('http');
const path = require('path');
http.createServer((req, resp)=>{
    resp.write("Hello , World");

})

.listen(8080, ()=>{
    console.log("Server is running at http://localhost:8080");
})