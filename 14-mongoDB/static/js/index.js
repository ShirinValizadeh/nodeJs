

$(document).ready(function () {

  let isAuth = false //! session-2




    $('#login').click(function (e) { 
        e.preventDefault();
      //  console.log({username :$("#username").val() , password :$("#password").val() });
        
       $.post("/login", {username :$("#username").val() , password :$("#password").val() },
            function (data, textStatus, jqXHR) {
                //convert data to string and set it inside  tag<p></p>
                // or? $('#info').append("<p>" + data.toString() + "</p>"); or 
              $('#info').append("<p>" + data["status"] + "||" + data["msg"]+ "</p>");
              //or  $("#info").append(`${data.status} , ${data.msg} `);
            }
        
        ); 
    });



    //! sinup
    $('#signUp').click(function (e) { 
      e.preventDefault();
      $.post("/sinup", {username :$("#signUpUser").val() , password :$("#signUpPass").val() },
        function (dataSignUp, textStatus, jqXHR) {
          $('#info').append("<p>" + dataSignUp["status"] + "||" + dataSignUp["msg"]+ "</p>");
          
        },
       
      );
    });




    //!session-1
    $.post("/getInfo",function (data) {    
        $('#auth').html(JSON.stringify(data));
        console.log(data);        
        if (data) {
          $('#user').html(data["username"]);
          isAuth = true ;  // just by lernen
        }
      });
    

      //!session-2 comment
      $('#submitComment').click(function (e) { 
        e.preventDefault();
        if (isAuth) {

          $.post("/submitComment", {msg : $('#msg').val()},
          function (data, textStatus, jqXHR) {
           console.log(data);
            $('#info').append("<p>" + data["status"] + "||" + data["msg"]+ "</p>");
            getComment();  //get all comment and bring to me
          });
    
        }else{
          alert(":|")
        }

        
      });


//!-2  logout
      $('#logOut').click(function (e) { 
        e.preventDefault();
       
        $.post("/logout", 
          function (data, textStatus, jqXHR) {
            $('#info').append("<p>" + data["status"] + "||" + data["msg"]+ "</p>");           
          },
          "dataType"
        );
      });

      //-2  ger other comment that client are send
      let getComment = function(){
      
          $.post("/getComment", {},function (data) { 
              for(let attr in data){
                //attr > key value        &    data[attr] > all comments from user
                  $('#commentBox').append(`<p> ${attr} msg :  ${data[attr].toString()} </p>`);
              }
           }  );

      
      
      }

    
});