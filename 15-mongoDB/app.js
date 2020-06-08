const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

//article model
const Article = require('./article-models')

// CRUD : creat,read,update,delete
//Methode :  post,get,put or patch , delete

const article = new Article({
    title:'test title' , 
    body: 'this is the main part of article'

});

article.save(()=>{
    console.log('article saved');
    
})

app.post('/creat', (req, res) => {
    //LOGIC
    res.send('creat');
});

app.get('', (req, res) => {
    //LOGIC
    res.send('Readed');
});

app.put('/update', (req, res) => {
    //LOGIC
    res.send('update');
});

app.delete('/delete', (req, res) => {
    //LOGIC
    res.send('delete');
});



app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});