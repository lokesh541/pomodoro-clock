$(document).ready(function(){
  var seconds = 60;
  var minutes = Number(document.getElementById("session").innerHtml);
$("#start").click(function(){
  console.log(minutes);
  console.log(seconds);
      timeUpdate();
    });
    function timeUpdate(){
    if (seconds >= 0){
     seconds--;
    }
    if (seconds == 0 && minutes >= 0) {
      minutes--;
    }

      minutes = checkTime(minutes);
      seconds = checkTime(seconds);
      document.getElementById("session").innerHtml =  minutes + ":" + seconds;
      var intervalId = setInterval(timeUpdate, 1000);
    }
    function checkTime(i) {
        if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
        return i;
    }

});
