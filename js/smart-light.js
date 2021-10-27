$(() => {

    console.log("Smart Lights Alive")

});

var intervalId = window.setInterval(function(){
var xmlhttp = new XMLHttpRequest();
var url = "http://www.owmakerspace.co.za/groupOne/michaela/readall.php?id=1"; // IoT Device GET URL

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        console.log(myArr.controlTest[0]);

            // VARIABLE from IoT DEVICE

            var ledStateLight = myArr.controlTest[0].led_state;
            var ultrasonicData = myArr.controlTest[0].ultrasonic_data;

            // document.getElementById('led_state').innerHTML= ledState;
            // document.getElementById('ultrasonic_data').innerHTML= ultrasonicData;
            
        
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

}, 5000);

$.ajax("http://www.owmakerspace.co.za/groupOne/michaela/update.php?id=1&led_state="+ ledStateLight + "&ultrasonic_data=" + ultrasonicData); // IoT Device UPDATE URL