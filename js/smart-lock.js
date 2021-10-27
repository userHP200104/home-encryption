$(() => {

    console.log("Smart Lock Alive")

});

var intervalId = window.setInterval(function(){
var xmlhttp = new XMLHttpRequest();
var url = "http://www.owmakerspace.co.za/groupOne/hansin/readall.php?id=1"; // IoT Device GET URL

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        console.log(myArr.controlTest[0]);

            // VARIABLE from IoT DEVICE

            var lockState = myArr.controlTest[0].lock_state;
            var redLedStateLock = myArr.controlTest[0].red_led_state;
            var greenLedStateLock = myArr.controlTest[0].green_led_state;
            var ldrValue = myArr.controlTest[0].ldr_value;
            var password = myArr.controlTest[0].pass;

            if($(lockState == 1)){
                $('.checkbox').prop('checked', true);

            }else{
                $('.checkbox').prop('checked', false);

            }

            // document.getElementById('lock_state').innerHTML= lockState;
            // document.getElementById('red_led_state').innerHTML= redLedState;
            // document.getElementById('green_led_state').innerHTML= greenLedState;
            // document.getElementById('ldr_value').innerHTML= ldrValue;
            
            if($("#lock_toggle_switch").is(":checked")) {
                lockState = 0;
                redLedStateLock = 1;
                greenLedStateLock = 0;
                ldrValue = 20;
                password = "1234";
                console.log("locked");
            }else if(!$("#lock_toggle_switch").is(":checked")){
                lockState = 1;
                redLedStateLock = 0;
                greenLedStateLock = 1;
                ldrValue = 20;
                password = "1234";
                console.log("unlocked");
            
            }
        
            $('.toggle_switch').on('change', function(){
                console.log('changed');
                $.ajax("http://www.owmakerspace.co.za/groupOne/hansin/update.php?id=1&lock_state="+ lockState + "&red_led_state=" + redLedStateLock + "&green_led_state=" + greenLedStateLock + "&ldr_value=" + ldrValue + "&pass=" + password); // IoT Device UPDATE URL
            
            });

        }
    };


xmlhttp.open("GET", url, true);
xmlhttp.send();

}, 1000);

