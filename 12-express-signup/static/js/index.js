$(document).ready(function () {
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




});