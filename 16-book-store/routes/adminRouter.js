const express = require('express');


const adminRouter =express.Router()

adminRouter.get('/addbook',(req,res)=>{
    res.render('addBook')
})


module.exports = adminRouter;