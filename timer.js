class Timer {
    // this will be automatic in a new Timer
    constructor(durationInput, startButton, pauseButton, callbacks){
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        // making the callbacks optional
        if (callbacks) {
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }
        // event Listeners
        this.startButton.addEventListener('click', this.start)
        this.pauseButton.addEventListener('click', this.pause)
    }

    //using arrow functions for the this keyword 
    //to reference the class, all properties and methods
    tick = () => {
        if (this.timeRemaining <= 0) {
            this.pause();
            if(this.onComplete){
                this.onComplete();
            }
        } else {
            // set and get functions used together
            // the left is setting the parameter given
            // the right is getting the value in the input and subtracting
            this.timeRemaining = this.timeRemaining - .05;
            if(this.onTick){
                this.onTick(this.timeRemaining)
            }
        }
        
    };

    // getter and setter function
    get timeRemaining (){
        // going to return the number given in the input
        return parseFloat(this.durationInput.value)
    };

    set timeRemaining (time) {
        // going to set what is passed in the variable as the input
        this.durationInput.value = time.toFixed(2);
    }

    start = () => {
        // checking if givien the callback
        if(this.onStart){
            this.onStart(this.timeRemaining);
        }
        // setting the tick method to run every second
        this.tick();
        // adding timer to the class, to make it available
        // running the animation quicker for smoother transisiton
        this.timerId = setInterval(this.tick, 50);        
    };

    pause = () =>{
        clearInterval(this.timerId);
    };
}