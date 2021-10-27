$(() => {

    console.log("Smart Fire Detector Alive");

    var intervalId = window.setInterval(function(){
    var xmlhttp = new XMLHttpRequest();
    var url = "http://www.owmakerspace.co.za/groupOne/jean/readall.php?id=1"; // IoT Device GET URL

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);
            console.log(myArr.controlTest[0]);

                // VARIABLE from IoT DEVICE

                var fireState = myArr.controlTest[0].fire_state;
                var redLedStateFire = myArr.controlTest[0].red_led_state;
                var greenLedStateFire = myArr.controlTest[0].green_led_state;
                var blueLedStateFire = myArr.controlTest[0].blue_led_state;
                var dhtValue = myArr.controlTest[0].dht_val;

                // document.getElementById('fire_state').innerHTML= fireState;
                // document.getElementById('red_led_state').innerHTML= redLedState;
                // document.getElementById('blue_led_state').innerHTML= blueLedState;
                
            
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    }, 5000);

    $.ajax("http://www.owmakerspace.co.za/groupOne/jean/update.php?id=1&fire_state="+ fireState + "&red_led_state=" + redLedStateFire + "&green_led_state=" + greenLedStateFire + "&blue_led_state=" + blueLedStateFire + "&dht_val=" + dhtValue); // IoT Device UPDATE URL

});