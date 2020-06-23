const fs = require('fs');  //1


function registerUser(email,password) {
    //use promis 
    return new Promise((resolve , reject)=>{
      //read data use fs
      const readData = fs.readFileSync('./users.json')
      //convert to object
      const data = JSON.parse(readData)
      
      //check user email is exist using ES6 
      const existUser = data.users.find(user => user.email == email)
      if (existUser) {  // if there is same email as what user write than is error 
        reject('exist')  //line 60 app.js
      }else{
        data.users.push({
          id:data.newId ,
          email: email,
          password:password
        })
        //increase the newId property for data for next registerd user
        data.newId++
        //convert data to json and write it in users.json
        fs.writeFileSync('./users.json' , JSON.stringify(data))
        resolve()
      }
    })
 

  }



  module.exports = {registerUser}