//document ready function
$(document).ready(function()
{

    console.log("DOM ready");

    //start digital clock
    digitalClock();
    clock() ;
    refreshClock();
    refreshDigital()
    $('#timepicker').timepicki(); 
    
 });


var ractive = new Ractive({
    el: '#nextAlarmCont',
    template: '#template',
    data:{name: ''}
    
});





//========================Digital clock==============================//
function digitalClock()
{
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    //adding 0s
     if (seconds < 10) 
        {
            // Add the "0" digit to the front
            // so 9 becomes "09"
            seconds = "0" + seconds;
        }
    if(minutes < 10)
        {
            minutes = "0" + minutes;
        }
    //displaying
    var clockDiv = document.getElementById('digitalClock');
    clockDiv.innerText = hours + ":" + minutes;     
}
    
    
function refreshDigital()
{
    //refreshing every second
    setInterval(digitalClock, 1000);   
}
    
//=====================Analog clock taken from: http://codepen.io/WinterJoey/pen/FlhcJ/ =======//
function clock() 
{ 
  var t = moment(),
      a = t.minutes() * 6,
      o = t.hours() % 12 / 12 * 360 + (a / 12);
  $(".hour").css("transform", "rotate(" + o + "deg)");
  $(".minute").css("transform", "rotate(" + a + "deg)");
}
function refreshClock() 
{
  clock(), setTimeout(refreshClock, 1000)
}

//======================================================================================//     



    