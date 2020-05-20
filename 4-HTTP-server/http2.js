//***** server */
let http = require('http')

let server = http.createServer(function(req , resp){
    //console.log(req);  
    resp.writeHead(200 , {"content-type" :"text/html" })   
    console.log("i got your request");
       console.log(req.method);
       
      if (req.method == "GET") {
          resp.end("your request it GET")
      }else if(req.method == "POST"){
        resp.end("your request is POST")
      }else{
        resp.end("????")
      }

})


server.listen(8080);
console.log("server running an port 8080");

