//***********send request */

let http = require('http')

let server = http.createServer(function(req , resp){
    //console.log(req);
    resp.writeHead(200 , {"content-type" :"text/html" })    
    resp.end("i am there !")
})


server.listen(8080);
console.log("server running an port 8080");

