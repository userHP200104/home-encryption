$(() => {

    console.log("Smart Alarm Alive")

});

var intervalId = window.setInterval(function(){
var xmlhttp = new XMLHttpRequest();
var url = "http://www.owmakerspace.co.za/groupOne/cayla/readall.php?id=1"; // IoT Device GET URL

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        console.log(myArr.controlTest[0]);

            // VARIABLE from IoT DEVICE

            var soundPath = myArr.controlTest[0].sound_path;
            var ledStateAlarm = myArr.controlTest[0].led_state;

            // document.getElementById('sound_path').innerHTML= soundPath;
            // document.getElementById('led_state').innerHTML= ledState;
            
        
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    
}, 5000);

$.ajax("http://www.owmakerspace.co.za/groupOne/cayla/update.php?id=1&sound_path="+ soundPath + "&led_state=" + ledStateAlarm); // IoT Device UPDATE URL