const deadLine= new Date(2019,4,1,12,0,0,0);


let sec= document.querySelector('.seconds');
let min= document.querySelector('.minutes');
let hour= document.querySelector('.hours');
let day= document.querySelector('.days');

function timer() {
let dateNow= Date.now()
let delta = deadLine-dateNow

let seconds = Math.floor(delta/1000%60);
let minutes = Math.floor(delta/60000%60);
let hours = Math.floor(delta/60000/60%24);
let days = Math.floor(delta/60000/60/24);

sec.textContent = seconds< 10 ? `0${seconds}` : seconds; 
min.textContent = minutes< 10 ? `0${minutes}` : minutes;
hour.textContent = hours< 10 ? `0${hours}` : hours;
day.textContent = days < 10 ? `0${days}` : days;
}
timer()
setInterval(timer,1000)