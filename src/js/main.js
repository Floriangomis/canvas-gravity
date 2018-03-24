import '../style/style.css';
import Ball from './ball';
import { randomIntFromInterval } from './utility';
import { cleanCanvas, writeOnCanvas } from './utility-canvas';

// Entry point of the program
let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight - 30;
let clearBtn = document.querySelector('#clear-canvas');
let dropBtn = document.querySelector('#drop');
let mouseAnimCheckBox = document.querySelector('#mouseAnim');
export let c = canvas.getContext('2d');
let arrayOfCircle = [];

let dropBall = () => {
    for (let index = 0; index < 300; index++) {
        arrayOfCircle.push( new Ball(  
                                        randomIntFromInterval(40, canvas.width - 40),
                                        randomIntFromInterval(0, 100)
                                ) );
    }
};

/*****************
 * Event Listener
*****************/
// Attach an event listener on any click on the canvas and then create an instance of Circle every time
// a click occur on it. Each instance is pushed into an array which allow us to then use map in the animate method.
canvas.addEventListener('click', e => {
    arrayOfCircle.push(new Ball(e.x, e.y));
});
// Attach a callback to the clean btn. We simply empty the array here.
clearBtn.addEventListener('click', e => {
    arrayOfCircle = [];
});
dropBtn.addEventListener('click', () => {
    dropBall();
});
// Allow to clean the canvas when resizing the window and avoid to create buggy ball
window.addEventListener('resize', e => {
    arrayOfCircle = [];
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 30;
});
// Mouse move event Handler
let mouseMoveEventHandler = e => {
    arrayOfCircle.push(new Ball(e.x, e.y));
};
// Trigger animation on mouse movement or remove the event Listener
mouseAnimCheckBox.addEventListener('change', e => {
    if(e.target.checked) {
        window.addEventListener('mousemove', mouseMoveEventHandler);
    } else {
        window.removeEventListener('mousemove', mouseMoveEventHandler);
    }
});


// The Big bad Loop
let animate = () => {
    cleanCanvas();
    
    writeOnCanvas({x: 10, y: 50}, "Click on the canvas to pop ball")
    writeOnCanvas({x: canvas.width - 200, y: 50}, "Number of Balls : " + arrayOfCircle.length)

    arrayOfCircle.map( (val, index) => {
        if(val.x && val.y) {
            val.update();
        } else {
            //remove from the array
            arrayOfCircle.splice(index, 1);
        }
    })
    requestAnimationFrame(animate);
};

// Launch the loop.
animate();