const express = require('express')
const app = express()
const fileUpload = require('express-fileupload')

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({extended: false}))
app.use(fileUpload({   
    limits: { fileSize: 50 * 1024 * 1024 },   //set limit for file
  }));



app.get('/', (req, res) => {
    res.render('main')
});
app.post('/', (req, res) => {
    console.log(req.body);
    console.log(req.files.photo); // the uploaded file object
    //move the uploaded file to public folders
    req.files.photo.mv(__dirname + '/public/uploadedFiles/' + req.files.photo.name).then(()=>{
        //redirect prevent resumbission again on refresh not like res.render
        res.redirect('/')
        //res.render('main')
    }).catch(error =>{
        console.log(error);
        res.send(error.message)
    })

});













app.listen(3000, () => {
    console.log('App listening on port 3000!');
});