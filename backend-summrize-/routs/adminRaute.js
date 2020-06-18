const express = require('express')
const fs = require('fs')

function adminBurgerRouter(obj) {
    const adminRoute = express.Router()
    //!  5 build a midelware to check the session for all routes in /admin , /admin/blabla
    adminRoute.use((req , res,next)=> {
        if (req.session.user) {//!  login to admin muss be login first
            next()
        }else{
            res.redirect('/')
        }
    })


// render main file 
    adminRoute.get('/', (req, res) => { 
        console.log(req.session.user); 
       /* or 5  if (req.session.user) {  just /admin
            res.render('admin')
        } else{
            res.redirect('/login')
        }    */
        res.render('admin')
    });


    adminRoute.get('/addmeal', (req, res) => {
        // const jsonText = fs.readFileSync(__dirname + '/meals.json')
        // const obj = JSON.parse(jsonText)
        res.render('adminAddMeal', {
            meals: obj
        })
    });
    //------------------------------------------------------------------------
    adminRoute.get('/deletmeal', (req, res) => {
        res.render('adminDeletMeal', {
            meals: obj
        })
    });

    adminRoute.post('/deletmeal', (req, res) => {
        //console.log(req.body.mealid)
        const idx = req.body.mealid
        // delet foto 
        try {
            fs.unlinkSync('./public' + obj[idx].imgUrl)
        } catch (error) {
            console.log(error);
        }

        obj.splice(idx, 1)
        fs.writeFileSync('./meals.json', JSON.stringify(obj))


        res.sendStatus(200)
    })

    //-------------------------------------------------------------------------------
    adminRoute.get('/editmeal', (req, res) => {
        res.render('adminEditMeal', {
            meals: obj
        })
    })
    adminRoute.post('/editmeal', (req, res) => {
      //  console.log(req.body)
        //console.log(req.files)

        obj[req.body.mealid].title = req.body.mealTitle
        obj[req.body.mealid].description = req.body.mealDescription
        obj[req.body.mealid].price = req.body.mealPrice

        if (req.files) {
            const mealImg = req.files.imgFile
            try {
                fs.unlinkSync('./public' + obj[req.body.mealid].imgUrl) //delet old img file    
            } catch (error) {
                console.log(error);
            }

            // get image extenstion
            let ext = mealImg.name.substr(mealImg.name.lastIndexOf('.'))
            //move new img to uploaded folder
            mealImg.mv('./public/uploadedFiles/' + req.body.mealTitle.replace(/ /g, '_') + (req.body.mealid) + ext).then(() => {
                obj[req.body.mealid].imgUrl = '/uploadedFiles/' + req.body.mealTitle.replace(/ /g, '_') + (req.body.mealid) + ext
                fs.writeFileSync('./meals.json', JSON.stringify(obj))
                //res.sendStatus(200)
                res.json( obj[req.body.mealid].imgUrl )
            }).catch(error => {
                res.sendStatus(500)
            })
        } else {
            fs.writeFileSync('./meals.json', JSON.stringify(obj))
            //res.sendStatus(200)
            res.json( obj[req.body.mealid].imgUrl )

        }
    })
//--------------------------------------------------------
    adminRoute.get('/admin' , (req,res) =>{
        res.render('admin');
    })
    adminRoute.get('/login' , (req,res) =>{
        res.render('login');
    })

  
    //----------------------------------------------------------------   
    adminRoute.post('/addmeal', (req, res) => {
    
        const mealTitle = req.body.mealTitle
        const mealPrice = req.body.mealPrice
        const mealDescription = req.body.mealDescription
        const mealDetails = req.body.mealDetails
        
     
     
        if (mealTitle && mealPrice && mealDescription && req.files) {
           //! 10 or  check if mealTitle exist
            const foundMachmeal = obj.find(meal =>meal.title == mealTitle)
            if (foundMachmeal) {
                res.send("this mealTitle exict");
            }else{
                const mealImg = req.files.mealimg
            //mealImg.name // blabla.jpeg
            // get image extenstion
            let ext = mealImg.name.substr(mealImg.name.lastIndexOf('.'))
            mealImg.mv('./public/uploadedFiles/' + mealTitle.replace(/ /g, '_') + (obj.length ) + ext).then(() => {

                let newmeal = {
                    title: mealTitle,
                    description: mealDescription,
                    imgUrl: '/uploadedFiles/' + mealTitle.replace(/ /g, '_') + (obj.length) + ext,
                    price: mealPrice,
                    details: mealDetails
                }
                obj.push(newmeal)
                fs.writeFileSync('./meals.json', JSON.stringify(obj))
                //res.render('adminAddMeal', {meals: meals})
                // you need to write the full path on res.redirect
                res.redirect('/admin/addmeal')
            }).catch(error => {
                res.send(error.message);
            })
            }
            

        } else {
            res.send("meal data is not complete");
        }
    


    });
    //! 10.1 or  check if mealTitle exist   using fetch
    adminRoute.post('/checkMealName' , (req,res)=>{
      //  console.log(req.body);
        const foundedMeal = obj.find(meal => meal.title == req.body.mealtitle )
        if (foundedMeal) {
            res.json('exist')
        }else{
            res.json('not exist')
        }
    })

    return adminRoute
}


module.exports = {
    adminBurgerRouter
}