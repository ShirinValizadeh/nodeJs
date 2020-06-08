const nodemailer = require('nodemailer')


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'shirinvalizadeh6004@gmail.com',
      pass: '0920207472'
    }
  });  

  //!take   msg name email subject
  function sendEmail(name , email ,subject ,msg , callback) {
    var mailOptions = {
        from: 'shirinvalizadeh6004@gmail.com',
        to: 'shirinvalizadeh6004@gmail.com',
        subject: subject,
        text:email+ '\n'+ name + '\n' + msg
        };
   
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
          callback(false)
        } else {
          console.log('Email sent: ' + info.response);
          callback(true)
        }
      }); 

    }

    module.exports = {sendEmail}