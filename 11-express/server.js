let express = require("express") ;
let app     = express();
let bodyParser = require("body-parser");  // !
let path = require('path')

//go and search in                 folder
//app.use("/static",express.static(__dirname + "static"))
app.use("/static" , express.static(path.join(__dirname , "static")))  //! serch in folder
app.use(bodyParser.json());  
app.use(bodyParser.urlencoded({extended:true})); //!middleware for parsing bodies from URL.

//? 1 user send us username and pass(was wir user eingeben)
let users = {
  shirin :"123",
  dariush : "1234" , 
  ali : "12345"
}

//if get
 app.get("/",function(req,resp,next){ 
resp.sendFile(__dirname +"/static/index.html")
});
app.get("/login" , function(req,resp,next){
    resp.sendFile(__dirname +"/static/login.html")
});
 


//if post
 app.post("/",function(req,resp,next){
    console.log("post");    
});
//!if post kame for login
app.post("/login" , function(req,resp,next){
  console.log("post kame for loging ");  
 // resp.send("end") 
 //console.log(req.body);  // show us all objUser
//! check  username and password 
  for (user in users){
    if (req.body["username"] == user) {
          //if user is true check pass
        if (req.body["password"] == users[user]) {
          resp.json({status : true , msg : "you are login"})
          return;   // if ist true return dont go to the next
        }else{
          resp.json({status : false , msg : "your pass fehlt"})
              return;
        }
    }
  }
  resp.json({status : false , msg : "user is fals"})  //! at the end if user and pass is false
});
 


//show them
app.listen(8080);
console.log("app running an pors 8080");
