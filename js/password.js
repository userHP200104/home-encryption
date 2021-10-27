var typedPassword = "";
var password = "1234";
var counter = 1; 
var pwdLen = 4;   

$(()=>{
    console.log("Password ready");
    
    $('.passwordBtn').on('click', function(){

            if(counter <= 4){
           
                if($(this).hasClass("1")){
                    typedPassword = typedPassword + "*";

                    console.log(typedPassword);
                    console.log("counter1 ", counter);
                    counter++;
                }
                
                if($(this).hasClass("2")){
                    typedPassword = typedPassword + "*";

                    console.log(typedPassword);
                    console.log("counter2 ", counter);
                    counter++;
                }
                
                if($(this).hasClass("3")){
                    typedPassword = typedPassword + "*";

                    console.log(typedPassword);
                    console.log("counter3 ", counter);
                    counter++;
                }
                
                if($(this).hasClass("4")){
                    typedPassword = typedPassword + "*";

                    console.log(typedPassword);
                    console.log("counter ", counter);
                    counter++;
                }
                
                if($(this).hasClass("5")){
                    typedPassword = typedPassword + "*";

                    console.log(typedPassword);
                    console.log("counter ", counter);
                    counter++;
                }
                
                if($(this).hasClass("6")){
                    typedPassword = typedPassword + "*";

                    console.log(typedPassword);
                    console.log("counter ", counter);
                    counter++;
                }
                
                if($(this).hasClass("7")){
                    typedPassword = typedPassword + "*";

                    console.log(typedPassword);
                    console.log("counter ", counter);
                    counter++;
                }
                
                if($(this).hasClass("8")){
                    typedPassword = typedPassword + "*";

                    console.log(typedPassword);
                    console.log("counter ", counter);
                    counter++;
                }

                if($(this).hasClass("9")){
                    typedPassword = typedPassword + "*";

                    console.log(typedPassword);
                    console.log("counter ", counter);
                    counter++;
                }
                
                if($(this).hasClass("0")){
                    typedPassword = typedPassword + "*";

                    console.log(typedPassword);
                    console.log("counter ", counter);
                    counter++;
                }

                if(counter < 4){
                    console.log('disabled');
                    $('#enter').prop('disabled', true);    
            
                }else if (counter > 4){
                    console.log('enable');
                        $('#enter').prop('disabled', false);
                }

                $('.password_display').text(typedPassword);
            }
            
            $('#enter').on('click', function(){
                $('.lock_screen').hide();
            });


        });

});