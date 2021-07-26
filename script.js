document.querySelector(".toggle").addEventListener("click",function(){
    if(document.querySelector("html").classList.contains("dark")){
        document.querySelector("html").classList.remove("dark");
        document.querySelector(".toggle").innerHTML = "Dark mode";
        document.querySelector(".toggle").setAttribute("title","Click to change the Light Mode into Dark Mode");
    }
    else{
        document.querySelector("html").classList.add("dark")
        document.querySelector(".toggle").innerHTML = "Light mode";
        document.querySelector(".toggle").setAttribute("title","Click to change the Dark Mode into Light Mode");
    }
 });
var day;
var date;
var month;
var year;
var daysArray = ['Sunday','Monday','Tuesday','Wednesday','Thrusday','Friday','Saturday'];
var monthsArray = ['January','Feburary','March','April','May','June','July','August','September','October','November','December'];

setInterval(setTime,1000)
function setTime(){
    var time = new Date();
    var hour = time.getHours();
    var minute = time.getMinutes();
    var second = time.getSeconds();
    var date = time.getDate();
    var day = time.getDay();
    var month = time.getMonth();
    var year = time.getFullYear();

    if(hour >= 12){
        var hoursForClock = hour%12;
    }
    if(hour > 12){
        hour = hour%12;
    }
    var hrDeg = 15*hoursForClock + minute/4;
    var minDeg = 6*minute;
    var secDeg = 6*second;
    console.log(hrDeg);
    console.log(minDeg);
    console.log(secDeg);
    console.log(hour);
    document.querySelector(".hour").style.transform =`translate(-50%,-100%) rotate(${hrDeg}deg)`;
    document.querySelector(".minute").style.transform = `translate(-50%,-100%) rotate(${minDeg}deg)`;
    document.querySelector(".second").style.transform = `translate(-50%,-100%) rotate(${secDeg}deg)`;

    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    var digitalTime = hour + ":" + minute;
    document.querySelector(".time").innerHTML = digitalTime;
    document.querySelector(".day").innerHTML = daysArray[day];
    document.querySelector(".tareek").innerHTML = date;
    document.querySelector(".month").innerHTML = monthsArray[month];
    document.querySelector(".year").innerHTML = year;
    
}
setTime();