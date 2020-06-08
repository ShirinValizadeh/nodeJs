const express = require('express');
const app = express();
const emailSender = require('./mudules/emailSender');


// use public files
app.use(express.static('./public'));


//use express urlencoder to get post
app.use(express.urlencoded({extended:true}));



app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


// render main file 
app.get('/', (req, res) => {
   res.render('main')
});
app.get('/menu', (req, res) => {
    res.render('menu')
 });
 app.get('/contact', (req, res) => {
    res.render('contact')
 }); 



//!! =========to get data from  FORM 
 app.post('/contact', (req, res) => {
   console.log(req.body)
   emailSender.sendEmail(req.body.name ,req.body.email , req.body.subject , req.body.message ,(ok)=>{
     if (ok) {
          res.sendStatus(200)  // res.json('1');   callback
     }else{
      res.sendStatus(500)
     }
      
   });


 });












app.listen(3000, () => {
    console.log('App listening on port 3000!');
});