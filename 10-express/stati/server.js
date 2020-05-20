let express = require("express") ;
let app     = express();

//go and search in                 folder
app.use(express.static(__dirname + "/stati"))


//if come request sendFile
app.get("/",function(req,resp,next){ 
resp.sendFile(__dirname + "/home.html")
});
app.get("/login" , function(req,resp,next){
    resp.sendFile(__dirname +"/login.html")
});






app.post("/",function(req,resp,next){
    
});

app.listen(8080);
console.log("app running an pors 8080");
