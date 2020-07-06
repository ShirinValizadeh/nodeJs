const passwordHash = require('password-hash')
const { MongoClient, ObjectID } = require('mongodb')
const connectionString = 'mongodb+srv://fbw5:123456abc@cluster0.hjd09.mongodb.net/test1?retryWrites=true&w=majority'


function connect() {  // call in line 18
    return new Promise((resolve, reject) => {
        MongoClient.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true }).then(client => {
            resolve(client)
        }).catch(error => {
            reject(error)
        })
    })
}

function registerUser(email, password) {
    return new Promise((resolve, reject) => {
        connect().then(client => {
            const db = client.db('test1')
            db.collection('users').findOne({ email: email }).then(user => {
                if (user) {
                    client.close() //!
                    reject('exist')
                } else {
                    db.collection('users').insertOne({
                        email: email,
                        password: passwordHash.generate(password)
                    }).then(response => {
                        client.close() //!
                        if (response.result.ok) {
                            resolve()
                        } else {
                            reject('can not insert')
                        }

                    }).catch(error => {
                        client.close() //!
                        reject(error)
                    })
                }
            }).catch(error => {
                client.close() //!
                reject(error)
            })
        }).catch(error => {
            reject(error)
        })
    })
}




function checkUser(email, password) {
    return new Promise((resolve, reject) => {
        connect().then(client => {
            const db = client.db('test1')
            db.collection('users').findOne({ email: email }).then(user => {
                client.close() //!
                if (user) {
                    if (passwordHash.verify(password, user.password)) {
                        resolve(user)
                    } else {
                        reject('pass is not true', 3)
                    }
                } else {
                    reject('user is not exist ', 3)
                }
            }).catch(error => {
                client.close() //!
                reject(error)
            })
        }).catch(error => {

            reject(error)
        })
    })

}


function addBook(bookTitle, bookDescription, bookPdf, bookImg, bookId) {
    return new Promise((resolve, reject) => {
        connect().then(client => {
            const db = client.db('test1')
            db.collection('book').findOne({ bookId: bookId, title: bookTitle }).then(findBook => {
                if (findBook) {
                    client.close() //!
                    reject(3)

                } else {
                    //creat imgs Arry to be save in database
                    const imgArr = []
                    bookImg.forEach((img, idx) => {
                        let ext = img.name.substr(img.name.lastIndexOf('.'))  //.jpg
                        // set new img name without space
                        let newName = bookTitle.trim().replace(/ /g, '_') + '_' + bookId + '_' + idx + ext
                        img.mv('./public/uploadedFiles/' + newName)
                        imgArr.push('/uploadedFiles/' + newName)
                    });
                    let pdfName = bookTitle.trim().replace(/ /g, '_') + '_' + bookId + '.pdf'
                    bookPdf.mv('./public/uploadedFiles/' + pdfName)
                    let pdfNewUrl = '/uploadedFiles/' + pdfName

                    db.collection('book').insertOne({
                        title: bookTitle,
                        description: bookDescription,
                        pdfUrl: pdfNewUrl,
                        imgs: imgArr,
                        userId: bookId
                    }).then(response => {
                        client.close()
                        if (response.result.ok) {
                            resolve()
                        } else {
                            reject(new Error('can not insert the book'))
                        }
                    }).catch(error => {
                        reject(error)
                    })

                }
            }).catch(error => {
                client.close() //!
                reject(error)
            })
        }).catch(error => {
            reject(error)
        })
    })

}


function getAllBooks() {
    return new Promise((resolve, reject) => {
        connect().then(client => {

            const db = client.db('test1')
            db.collection('book').find().toArray().then(findBooks => {


                findBooks.forEach(book => {
                    book['id'] = book['_id']// convert _id to id
                })
                client.close()
                resolve(findBooks)


            }).catch(error => {
                client.close()
                reject(error)
            })

        }).catch(error => {
            reject(error)
        })
    })
}




function getBook(id) {
    return new Promise ((resolve,reject) =>{ 
        connect().then(client =>{
            try {
                
        
            const db = client.db('test1')
            db.collection('book').findOne({_id :new ObjectID(id)}).then(book =>{
                client.close()
                if (book) {
                 book.id = book._id  // convert it to id
                    resolve(book)
                }else{
                    reject(new Error('can not find book with this id : ' + id))
                }
            }).catch(error =>{
                client.close()
                reject(error)
            })

                } catch (error) {
                reject(error)
            }
        }).catch(error =>{
            reject(error)
        })
    })
}


function userBooks(userId) {
    return new Promise((resolve, reject) => {
        connect().then(client => {

            const db = client.db('test1')
            db.collection('book').find({userId : userId}).toArray().then(findBooks => {


                findBooks.forEach(book => {
                    book['id'] = book['_id']  // convert _id to id
                })
                client.close()
                resolve(findBooks)


            }).catch(error => {
                client.close()
                reject(error)
            })

        }).catch(error => {
            reject(error)
        })
    })
}

module.exports = { registerUser, checkUser, addBook, getAllBooks ,getBook ,userBooks }