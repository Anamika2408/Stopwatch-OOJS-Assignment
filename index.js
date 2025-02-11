let timer;
let time = 0;
let isRunning = false;

const timeDisplay=document.getElementById('time');
const startBtn=document.getElementById('startBtn');
const stopBtn=document.getElementById('stopBtn');
const resetBtn=document.getElementById('resetBtn');

function updateTime(){
    timeDisplay.textContent = time;
}

function start(){
    if(!isRunning){
        timer=setInterval(() => {
            time++;
            updateTime();
        },100);
        isRunning=true;
        startBtn.disabled=true;
        stopBtn.disabled=false;
    }
}

function stop(){
    clearInterval(timer);
    isRunning=false;
    startBtn.disabled=false;
    stopBtn.disabled=true;
}

function reset(){
    clearInterval(timer);
    time=0;
    isRunning=false;
    startBtn.disabled=false;
    stopBtn.disabled=true;
    updateTime();
}

startBtn.addEventListener('click',start);
stopBtn.addEventListener('click',stop);
resetBtn.addEventListener('click',reset);