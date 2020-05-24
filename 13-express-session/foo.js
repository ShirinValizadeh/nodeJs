let express = require("express") ;
let app     = express();
let bodyParser = require("body-parser");  // !
let path = require('path');
let morgan = require('morgan') // will show us  req  same as console.log()
let session = require('express-session')  // sesion ~ cookie



 

//go and search in                 folder
//app.use("/static",express.static(__dirname + "static"))
app.use("/static" , express.static(path.join(__dirname + "/static")))  //! serch in folder
app.use(bodyParser.json());  
app.use(bodyParser.urlencoded({extended:true})); //!middleware for parsing bodies from URL.
app.use(morgan('common'));
 app.use(session({
  secret: 'secret', //!
 resave: false,
  saveUninitialized: true,
  //cookie: { secure: true }
}))  


//? 1 user send us username and pass(was wir user eingeben)
let users = {
  shirin :"123",
  dariush : "1234" , 
  ali : "12345"
}

//? session-2
let comments = {
  "shirin" : ["first comment from shirin" , "second comment"],
  "dariush" : ["first comment from dariush"]
}



//if get
 app.get("/",function(req,resp,next){ 
   //console.log(req.session);   
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
          req.session.auth = {username : req.body["username"]}  //or = blabla  //! musst be first for resp
          resp.json({status : true , msg : "you are login"})
          console.log(req.session.auth);          
          return;   // if ist true return dont go to the next
        }else{
          resp.json({status : false , msg : "your pass fehlt"})
              return;
        }
    }
  }
  resp.json({status : false , msg : "user is fals"})  //! at the end if user and pass is false
});

 //!-2 logout
app.post("/logout" , function (req,resp,next) {
  req.session.auth = {};
   //delete req.session.auth ;
   resp.json({status : true , msg : "out !"})

  })

//!! ******signUp

app.post("/sinup" , function(req , resp , next){
  if ( req.body.username.length && req.body.password.length >=4) {
    users[req.body.username] = req.body.password ;
    resp.json({status : true , msg : "done !" +  users[req.body.username]})  // show msg to user 
    console.log(users);
    
  }else{
    resp.json({status : false , msg : "failed !"})  // show msg to user 

  }
})

//! **************session-1
app.post("/getInfo" , function(req,resp,next){
  resp.json(req.session.auth);
});

//!-2  $.post("/submitComment", {},
app.post("/submitComment" , function (req,resp,next) {
  if (req.session.auth.username != undefined) {  //check  
     if (comments[req.session.auth.username] != undefined) {  //check is there any comment
      comments[req.session.auth.username].push(req.body.msg)
     }else{
      comments[req.session.auth.username] = [req.body.msg]
     }
        console.log(comments);
    resp.json({status : true , msg : "comment are save !"})  // show msg to user 
        
  }else{
    resp.json({status : false , msg : "you was not login!"})  // show msg to user 
  }
  })

//!-2   $.post("/getComment", {},
app.post("/getComment" , function (req,resp,next) {
  resp.json(comments)
  })


//show them
app.listen(8080);
console.log("app running an pors 8080");
