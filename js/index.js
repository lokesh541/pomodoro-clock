$(document).ready(function(){
  var seconds = 60;
  var minutes = parseInt($("#session").text());
  var breakTime = +parseInt($("#def-break").text())
  var sessionTime = +parseInt($("#def-session").text());

  var intervelId;
  var timeSwitch = 0;
  minutes-=1;

$("#start").click(timeUpdate);
$("#stop").click(function(){
clearTimeout(intervelId);
});
function timeUpdate(){
  if(seconds > 0)  seconds--;

  if(seconds === 0 && minutes >0) {
    seconds=60;
    minutes--;
}
if (seconds === 0&& minutes === 0) {

  if(timeSwitch === 0) {
    minutes = breakTime-1;
    seconds = 59;

  }
  else {
     timeSwitch = 1;
    minutes = sessionTime-1;

  }

}

 min = checkTime(minutes);
  sec = checkTime(seconds);
  $("#session").text( min + ":" + sec);
intervelId = setTimeout(timeUpdate,1000);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}



$(".plus").click(increment);
$(".minus").click(decrement);
function increment() {
$("#def-break").text(breakTime++);
$("#def-session").text(sessionTime++);
}

function decrement(){
$("#def-break").text(breakTime--);
$("#def-session").text(sessionTime--);
}




});
