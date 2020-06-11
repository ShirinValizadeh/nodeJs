const express = require('express');
const app = express();
const emailSender = require('./mudules/emailSender');
let fs = require('fs');  //1
const adminRaute = require('./routs/adminRaute')//!2  
const fileUpload = require('express-fileupload')


// use public files
app.use(express.static('./public'));
//use express urlencoder to get post
app.use(express.urlencoded({extended:false}));
 // set limit for file
app.use(fileUpload({   
  limits: { fileSize: 50 * 1024 * 1024 },  
}));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


// render main file 
app.get('/', (req, res) => {
   res.render('main')
});
app.get('/contact', (req, res) => {
    res.render('contact',{sent:1})    // noajax need to add  ,{sent:1}
 }); 


// //!readFile from json  1------'/menu'-----
const jsonText = fs.readFileSync(__dirname + '/meals.json');  //or2
const obj = JSON.parse(jsonText)  // convert to object to show them 

app.use('/admin',adminRaute.adminBurgerRouter(obj)) ; //!1.3 



app.get('/menu', (req, res) => {
    res.render('menu' ,{meals:obj})
 });








//!! =========to get data from  FORM   //( use AJAX in frontend)
 app.post('/contact', (req, res) => {
   console.log(req.body)
   const name = req.body.name 
   const email = req.body.email
   const subject = req.body.subject
   const message = req.body.message
   if (name !="" && name.length < 100 ) {
         emailSender.sendEmail(name ,email , subject , message ,(ok)=>{
     if (ok) {
       res.sendStatus(200)  // res.json('1');   callback
     }else{
      res.sendStatus(500)
     }
      
   });
   }



 });
 //!==== no AJAX
 app.post('/contact1', (req, res) => {
   console.log(req.body)
   const name = req.body.name 
   const email = req.body.email
   const subject = req.body.subject
   const message = req.body.message
   if (name !="" && name.length < 100 ) {
         emailSender.sendEmail(name ,email , subject , message ,(ok)=>{
     if (ok) {
       //res.sendStatus(200)  // res.json('1');   callback
       res.render('contact',{sent:2})  //!
     }else{
      //res.sendStatus(500)
      res.render('contact' , {sent:3})  //!

     }
      
   });
   }



 });












app.listen(3000, () => {
    console.log('App listening on port 3000!');
});