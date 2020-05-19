//************  fs.writeFile(file, data[, options], callback) will  replacing */


var fs = require('fs')

fs.readFile(process.cwd() + '/from.txt' , function(err , data){   //readfile   from.txt

    if (err) {
        console.log(err);
        
    }else{
        console.log(data);
        fs.writeFile(process.cwd() + '/to.txt' ,data , function(err){  // write it inside to.txt
            if (err) {
                  console.log(err);
            }else{
                console.log('file is save');                
            }               
        })
    }
}) 

// add
fs.appendFile(process.cwd() + '/to.txt' , "\n is append!" , function(err){
    if (err) {
        console.log(err);
        
    }else{
        console.log("file is append!!");
        
    }
})


fs.appendFile(process.cwd() + '/to.txt' , "\n secend time append!" , function(err){
    if (err) {
        console.log(err);
        
    }else{
        console.log("file is append!!");
        
    }
})