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


// ------'/menu'-----make menu as a obj and set them dynamicly
let meals = [
   {
       title: "Beefy Burgers",
       description: "Great way to make your business appear trust and relevant.",
       imgUrl: "/img/burger/1.png",
       price: 5
   },
   {
       title: "Burger Boys",
       description: "Great way to make your business appear trust and relevant.",
       imgUrl: "/img/burger/2.png",
       price: 5
   },
   {
       title: "Burger Bizz",
       description: "Great way to make your business appear trust and relevant.",
       imgUrl: "/img/burger/3.png",
       price: 5
   },
   {
       title: "Crackles Burger",
       description: "Great way to make your business appear trust and relevant.",
       imgUrl: "/img/burger/4.png",
       price: 5
   },
   {
       title: "Bull Burgers",
       description: "Great way to make your business appear trust and relevant.",
       imgUrl: "/img/burger/5.png",
       price: 5
   },
   {
       title: "Rocket Burgers",
       description: "Great way to make your business appear trust and relevant.",
       imgUrl: "/img/burger/6.png",
       price: 5
   },
   {
       title: "Smokin Burger",
       description: "Great way to make your business appear trust and relevant.",
       imgUrl: "/img/burger/7.png",
       price: 5
   },
   {
       title: "Delish Burger",
       description: "Great way to make your business appear trust and relevant.",
       imgUrl: "/img/burger/8.png",
       price: 5
   },
   {
       title: "Crackles Burger",
       description: "Great way to make your business appear trust and relevant.",
       imgUrl: "/img/burger/4.png",
       price: 5
   },
   {
       title: "Bull Burgers",
       description: "Great way to make your business appear trust and relevant.",
       imgUrl: "/img/burger/5.png",
       price: 5
   }
]
app.get('/menu', (req, res) => {
    res.render('menu' ,{meals:meals})
 });


 app.get('/contact', (req, res) => {
    res.render('contact',{sent:1})    // no ajax need to add  ,{sent:1}
 }); 


//--------'/admin/admeal'---------------
app.get('/admin/addmeal', (req, res) => {
   res.render('adminAddMeal' ,{meals:meals})
});
app.post('/admin/addmeal', (req, res) => {
   const mealTitle = req.body.mealTitle
   const mealPrice = req.body.mealPrice
   const mealDescription = req.body.mealDescription

//? beacuse of validation
   let obj = {     
         title: mealTitle,
         description: mealDescription,
         imgUrl: "/img/burger/1.png",
         price: mealPrice  
   }
   meals.push(obj)
   //res.render('adminAddMeal' ,{meals:meals})
   res.redirect('/admin/addmeal')
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