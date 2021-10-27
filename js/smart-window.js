$(() => {

    console.log("Smart Window Alive")

});

var intervalId = window.setInterval(function(){
var xmlhttp = new XMLHttpRequest();
var url = "http://www.owmakerspace.co.za/groupOne/areeb/readall.php?id=1"; // IoT Device GET URL

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        console.log(myArr.controlTest[0]);

            // VARIABLE from IoT DEVICE

            var windowAngle = myArr.controlTest[0].window_angle;
            var windowState = myArr.controlTest[0].window_state

            // document.getElementById('window_angle').innerHTML= windowAngle + "°";
            // document.getElementById('window_state').innerHTML= windowState;
            
        
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

}, 5000);

$.ajax("http://www.owmakerspace.co.za/groupOne/areeb/update.php?id=1&window_angle="+ windowAngle + "&window_state=" + windowState); // IoT Device UPDATE URL