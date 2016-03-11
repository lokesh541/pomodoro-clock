$(document).ready(function(){
 var breakTime = $("#def-break").text();
 var sessionTime = $("#def-session").text();
 var isActive = false;
 var hadBreak = false;
 var minutes = sessionTime;
 var seconds = 60;



$("#plus").click(increment);
$("#minus").click(decrement);

/*timer  trigger*/
$("#timer").click(function(){
if(!isActive){
  intervelId = setInterval(timerCount,1000);
  isActive = true;
}else {
clearInterval(intervelId);
isActive = false;
}
});

function increment(){
if (!$( this ).hasClass( "session" )) {
     minutes = breakTime++;
}else {
  minutes = sessionTime++;
}

  $(this).next().text(minutes);
  seconds = 60;
}

function decrement(){
  if (minutes>1) $(this).prev().text(--minutes);
seconds =60;
}



function timerCount(){
   if(minutes === parseInt($("#def-session").text())) minutes--;
  if(seconds > 0)  seconds-- ;
  if(seconds === 0 && minutes >0) {
    seconds=60;
    minutes--;
    }

if (seconds === 0 && minutes ===0) {
  if (!hadBreak) {
     minutes = breakTime;
     hadBreak = true;
  }else {
  minutes = sessionTime;
  }

}

  min = checkTime(minutes);
  sec = checkTime(seconds);
  $("#timer").text( min + ":" + sec);


}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

});
