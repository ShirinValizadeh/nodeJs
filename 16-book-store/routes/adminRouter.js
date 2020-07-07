const express = require('express');
const dataModule = require('../modules/mongodgDatamodule')
const adminRouter = express.Router()


adminRouter.use((req , res,next)=> {
    if (req.session.user) {//!  login to admin muss be login first
        next()
    }else{
        res.redirect('/login')
    }
}) 

//!-------with admin we writing here 

adminRouter.get('/' , (req,res) =>{
   // console.log(req.session.user); 

   res.render('admin' , {email: req.session.user.email}) // session will remember email line 78 admin.ejs
})






// ----------- /admin/adBook 
adminRouter.get('/addbook', (req, res) => {
    res.render('addBook') 
})



adminRouter.post('/addBook', (req, res) => {
    //console.log(req.body);
    // console.log(req.files);
    //console.log(Object.keys(req.files));
    //console.log(object.keys(req.files)); // we got the files as a ARRY
    //responses map
    //1 book saved successfuly
    //2 data error
    if (req.files) {// check there is any file?
        const bookTitle = req.body.bookTitle
        const bookDescreption = req.body.bookDescription
        const bookPdf = req.files.pdfFile
        // SERVER SIDE VALIDATION
        if (bookTitle && bookDescreption && bookPdf && Object.keys(req.files).length > 1) { // than check what is insine file
            const imgs = []
            for (const key in req.files) {
                if (req.files[key].mimetype != 'application/pdf') { // check if file is img not pdf
                    imgs.push(req.files[key])

                }
            }
            dataModule.addBook(bookTitle, bookDescreption, bookPdf, imgs , req.session.user._id).then(() => {
                res.json(1)
            }).catch(error =>{if (error == 3) {
                res.json(3)
            }})
        } else {
            res.json(2)
        }
    } else {
        res.json(2)
    }


})



adminRouter.get('/mybooks' , (req,res)=>{
    dataModule.userBooks(req.session.user._id).then(books => {  // find _id from session 
        res.render('mybooks', {books})
      }).catch(error =>{
          console.log(error);
          
      })
})



adminRouter.get('/logout' , (req,res)=>{
    req.session.destroy()
    res.redirect('/login')
})


// call function getBook() from mongodgDatamodule
adminRouter.get('/mybook/:id' , (req,res)=>{
    const bookid = req.params.id  // get bookid
    dataModule.getBook(bookid).then(book =>{
        if (book) {
            res.render('editbook' , {book})
        }else{
            reject('error')
        }
    }).catch(error =>{
        res.send('404');
    })
})

adminRouter.post('/editbook' , (req,res)=>{
    //const oldImgsUrl = req.body.oldImgsUrl     or
    const{ newBookTitle , oldImgsUrl ,bookDedcription  }= req.body
    console.log(newBookTitle , oldImgsUrl ,bookDedcription );  
    console.log(req.files);  // to see new imgs
    
    res.json(1)
    

})
//get data proceccing adn send to json
module.exports = adminRouter;