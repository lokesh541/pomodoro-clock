$(document).ready(function(){
  var seconds = 60;
  var minutes = parseInt($("#session").text());
  var intervelId;
  minutes-=1;
$("#start").click(timeUpdate);
if (seconds === 0&& minutes == 0) {
   startBreak();
};
function timeUpdate(){
  if(seconds > 0)  seconds--;
  if(seconds === 0 && minutes >0) {
    seconds=60;
    minutes--;
}

  min = checkTime(minutes);
  sec = checkTime(seconds);
  $("#session").text( min + ":" + sec);
intervelId = setTimeout(timeUpdate,1000);
}
$("#stop").click(function(){
clearTimeout(intervelId);
});
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
});
