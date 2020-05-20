let express = require("express") ;


let app = express()


app.use("/",function(req,resp,next){
    console.log("1");
    next();    //no answer go next
});
app.use("/",function(req,resp,next){
    console.log("2");
    next()   //no answer go next
});

app.get("/",function(req,resp,next){
    console.log("get");
    resp.send('end')   // or resp.end()   // answer and print (end) and did not go to the next
});


app.post("/",function(req,resp,next){
    console.log("post");
});

app.listen(8080);
console.log("app running an pors 8080");
