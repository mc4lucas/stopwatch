let seconds = 0;
let minutes = 0;
let hours = 0;

let counting = false;

const startBTN = document.querySelector('.Start');
const pauseBTN = document.querySelector('.Pause');
const resetBTN = document.querySelector('.Reset');

const timeText = document.querySelector('.text');

//Logic for buttons
startBTN.addEventListener('click', (e) =>{
    e.preventDefault();
    counting = true;
    doTime();
});
pauseBTN.addEventListener('click', (f) =>{
    f.preventDefault();
    counting = false;
    doTime();
});
resetBTN.addEventListener('click', (g) =>{
    g.preventDefault();
    counting = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    timeText.textContent = ("00" + ":" + "00" + ":" + "00");
});

//Logic for Time
function doTime(){
    if(counting == true){
        seconds++;
        console.log(seconds);

        if(seconds >= 60){
            seconds = 0;
            minutes++;
        }
        if(minutes >= 60){
            seconds = 0;
            minutes = 0;
            hours++;
        }
        if(hours >= 24){
            seconds = 0;
            minutes = 0;
            hours = 0;
        }

        if(hours == 0 && minutes == 0){
            timeText.textContent = ("00:" + "00:" + seconds);
        }else if(hours == 0 && minutes > 0){
            timeText.textContent = ("00:" + minutes + ":" + seconds);
        }else if(hours > 0 && minutes > 0){
            timeText.textContent = (hours + ":" + minutes + ":" + seconds);
        }
        
        setTimeout("doTime()", 1000);
    }
}
