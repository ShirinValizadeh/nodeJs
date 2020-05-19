//*********Sync \ ** ASync

var fs = require('fs');

//console.log(process.cwd());  // get file adress
//var buff = fs.readFileSync(process.cwd() + "/node.txt");
//console.log(buff);
//console.log(buff.toString()); // convert to string

// callback                                               buff  
fs.readFile( process.cwd() + "/node.txt" , function(err , data){
    if (err) {
        console.log(err);
        
    }else{

        console.log(data.toString());
        
    }
});

