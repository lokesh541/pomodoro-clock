$(document).ready(function(){
  var seconds = 60;
  var breakTime = +parseInt($("#def-break").text())
  var sessionTime = +parseInt($("#def-session").text());

  var intervelId;
  var binSwitch = true;  /*binary switch for switching b/w events */
  var minutes= sessionTime -1;



  $(".plus").click(increment);
  $(".minus").click(decrement);

/*timer*/
$("#timer").click(function(){
  if (binSwitch) {
    binSwitch =false;
    timeUpdate();
  }
  else {
    binSwitch = true;
    clearTimeout(intervelId);
  }
});

function timeUpdate(){
  if(seconds > 0)  seconds--;

  if(seconds === 0 && minutes >0) {
    seconds=60;
    minutes--;
}
if (seconds === 0&& minutes === 0) {

  if(binSwitch === 0) {
    minutes = breakTime-1;
    seconds = 59;

  }
  else {
     binSwitch = 1;
    minutes = sessionTime-1;

  }

}

  min = checkTime(minutes);
  sec = checkTime(seconds);
  $("#timer").text( min + ":" + sec);
intervelId = setTimeout(timeUpdate,1000);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}



function increment() {
$("#def-session,#timer").text(sessionTime++);
}

function decrement(){
$("#def-session,#timer").text(sessionTime--);

$("#def-break").text(breakTime--);
$("#def-session").text(sessionTime--);
}




});
