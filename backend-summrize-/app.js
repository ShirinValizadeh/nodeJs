const express = require('express');
const app = express();
const emailSender = require('./mudules/emailSender');
let fs = require('fs');  //1
const adminRaute = require('./routs/adminRaute')//!2  
const fileUpload = require('express-fileupload')
const session = require('express-session')
var cookie = require('cookie-parser')

//!creat session object options
const sessionOptions = {
  secret : 'burger',
  cookie :{}   
}
//use a session 
app.use(session(sessionOptions))
// use cookie-parser
app.use(cookie())
// use public files
app.use(express.static('./public'));
//use express urlencoder to get post that mean you cann change data
app.use(express.urlencoded({extended:false}));
app.use(express.json())  //! check if req is a json will convert to obj  wenn({extended:false})
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


// //!readFile from json  1------'/menu'-----
const jsonText = fs.readFileSync(__dirname + '/meals.json');  //or2
const obj = JSON.parse(jsonText)  // convert to object to show them 

app.use('/admin',adminRaute.adminBurgerRouter(obj)) ; //!1.3 


//*==============menu==================
app.get('/menu', (req, res) => {
    res.render('menu' ,{meals:obj})
 });


//*==============login==================
app.get('/login', (req, res) => {
  //!check cookie is save inside browser(req)
  console.log(req.cookies);
  if (req.cookies.burgerUser) {
  const userJsonText = fs.readFileSync(__dirname + '/users.json');  
  const users = JSON.parse(userJsonText) 
  const foundUser = users.find(user => user.username == req.cookies.burgerUser.username && user.pass == req.cookies.burgerUser.pass)
    if (foundUser) {
      req.session.user = foundUser
      res.redirect('/admin')
    }else{
      res.render('login')
    }
  }else{
    res.render('login')
  }

});
 //get pass user  // convert // see json    //convert    //if true 
  const userJsonText = fs.readFileSync(__dirname + '/users.json');  
const users = JSON.parse(userJsonText)  // convert to object to show them 
app.post('/login', (req, res) => {
 
 // console.log(users);  
// console.log(req.session);
//! check  username and password 
/* let check = false;
for (let i = 0; i < users.length; i++) {
  if (req.body.username== users[i].username && req.body.password == users[i].pass) {
    check = true;
    break;
  }
  
}
if (check) {
  res.json('exist')
}else{
  res.json('not exist')
} */
// ------------ES6----SAME AS 57-69-------
const foundUser = users.find(user => user.username == req.body.username && user.pass == req.body.password)
if (foundUser) {
  req.session.user = foundUser
  //!save cookie user-pass
  res.cookie('burgerUser' ,foundUser ,{ maxAge: 6000000,httpOnly: true}) // set time >,{maxAge: 60000}
  res.json('exist')

}else{
  res.json('not exist')
} 

});
//*===============logout=================
app.get('/logout', (req, res) => {
  req.session.destroy()
  res.clearCookie('burgerUser') //clear cookie wenn logOut
  res.redirect('/')
});
//*===============contact=================
app.get('/contact', (req, res) => {
  res.render('contact',{sent:1})    // noajax need to add  ,{sent:1}
}); 

//!! =========to get data from  FORM   //( use AJAX in frontend)
 app.post('/contact', (req, res) => {
   //console.log(req.body)
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


 //*============/meal/idx=============
/* app.get('/meal/:id', (req, res) => {  // if you write :blaid than params.blaid > idx 
  //res.send(req.params.id);
  const idx = req.params.id     
  if (obj[idx]) {
    res.render('meal' , {
    mealTitle : obj[idx].title ,
     mealPrice: obj[idx].price, 
     mealDescription: obj[idx].description ,
      mealImg :obj[idx].imgUrl
    })
  }else{
    res.send('we dont have this meal');
  }
  
});
 */


//!get mail use title   >  /meal/title
 app.get('/meal/:title', (req, res) => {  // idx or ('/meal/:mealTitle')
  //res.send(req.params.id);
  const mealtitle = req.params.title     // 
  const foundMeal = obj.find(meal => meal.title.trim().replace(/ /g,"_") ==  mealtitle)
  if (foundMeal) {
    res.render('meal' , {
    mealTitle :foundMeal.title ,
     mealPrice: foundMeal.price, 
     mealDescription: foundMeal.description ,
      mealImg :foundMeal.imgUrl,
      mealDetails:foundMeal.details
    })
  }else{
    res.send('we dont have this meal');
  }
  
});






app.listen(3000, () => {
    console.log('App listening on port 3000!');
});