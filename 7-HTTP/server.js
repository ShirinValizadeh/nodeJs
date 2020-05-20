let http = require("http");
let fs = require("fs");
let server = http.createServer(function(req , res){  //!1

    if (req.method == "GET") {  //!2  check if method == GET
        console.log("request get ");
        
        if (req.url == "/") {  //!3-1    wenn after / is nothing
            console.log("/");
            
            fs.readFile("./vie/home.html" , function(err , data){  //!4
                    if (err) {
                        console.log(err);                       
                    }else{
                        res.writeHead(200 , {"content-type" : "text/html"})   //!5
                        res.write(data);
                        res.end();
                    }
            })
        }else if (req.url == "/about") {  //!3-2     wenn after / is something
            console.log("/about");
/*             fs.readFile("./vie/about.html" , function(err , data) { //!4
                if (err) {
                    console.log(err);
                    
                }else{
                    res.writeHead(200 , {"content-type" : "text/html"})   //!5
                    res.write(data);
                    res.end();
                }
            })or */  
            fs.createReadStream("./vie/about.html").pipe(res)


        }
    }else{ //! 3-3
        console.log("nothing");
        res.end("page not found")
    }


})

server.listen(8080);
console.log("server running an port 8080");
