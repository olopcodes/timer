// variables that will be used for the Timer
const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');


const circle = document.querySelector('circle');
const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);


// creating a global variable to be used throughout the app
let duration;
const timer = new Timer(durationInput, startButton, pauseButton, {
    // take in the number passed in the input
    onStart(totalDuration) {
        duration = totalDuration;
    },
    onTick(timeRemaining){  
        circle.setAttribute('stroke-dashoffset', 
            // this makes the ticking match the time input
            perimeter * timeRemaining / duration - perimeter   
        );   
    },
    onComplete(){
        console.log('timer is complete')
    }
})


