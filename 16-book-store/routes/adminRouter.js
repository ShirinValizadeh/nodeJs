const express = require('express');
const dataModule = require('../modules/dataModule')
const adminRouter = express.Router()



//!-------with admin we writing here 
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
            dataModule.addBook(bookTitle, bookDescreption, bookPdf, imgs).then(() => {
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

//get data proceccing adn send to json
module.exports = adminRouter;