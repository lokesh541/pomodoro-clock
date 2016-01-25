$(document).ready(function(){
  var seconds = 60;
  var minutes = parseInt($("#session").text());
$("#start").click(function(){
        timeUpdate();
    });

function timeUpdate(){
  if(seconds > 0)  seconds--;
  if(seconds === 0 && minutes >0) {
    seconds=60;
    minutes--;
}
if (seconds === 0&& minutes == 0) {
  
};
  min = checkTime(minutes);
  sec = checkTime(seconds);
  $("#session").text( min + ":" + sec);

  
  var intervalId = setTimeout(timeUpdate,1000);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
});



