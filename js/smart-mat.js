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

            var pressureState = myArr.controlTest[0].pressure_state;
            var redLedStateMat = myArr.controlTest[0].red_led_state;
            var greenLedStateMat = myArr.controlTest[0].green_led_state;
            var blueLedState = myArr.controlTest[0].blue_led_state;

            // document.getElementById('pressure_state').innerHTML= pressureState;
            // document.getElementById('red_led_state').innerHTML= redLedState;
            // document.getElementById('green_led_state').innerHTML= greenLedState;
            // document.getElementById('blue_led_state').innerHTML= blueLedState;
            
        
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

}, 5000);

$.ajax("http://www.owmakerspace.co.za/groupOne/karabo/update.php?id=1&pressure_state="+ pressureState + "&red_led_state=" + redLedStateMat + "&green_led_state=" + greenLedStateMat + "&blue_led_state=" + blueLedState); // IoT Device UPDATE URL