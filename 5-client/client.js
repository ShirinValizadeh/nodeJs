//*********client */
let http = require("http");
let option = {
    hostname : "localhost",  // add ip server
    port : 8080,
    method : "POST" , 
    path : "/"  //adress
};


let request = http.request(option , function(resp){
   // console.log(resp);
    console.log(resp.headers);
    // wenn you get data do func
    resp.on("data" , function(chunck){
        console.log(chunck.toString());
        
    })
})
request.end()