import { c } from './main';

// Method use to clean the canvas everytime the requestAnimationFrame method is called.
export function cleanCanvas() {
    c.clearRect(0, 0, canvas.width, canvas.height);
};

// Allow how to write something on the canvas from a position and a text given
export function writeOnCanvas(position, text) {
    c.font = "14px Arial";
    c.fillStyle = "white";
    c.fillText(text ,position.x,position.y);
};

// Thanks to Pythagoras Theorem we can easily find the distance between 2 Balls.
export function distanceBetweenTwoElement(elem1 , elem2) {
    let xd = elem1.x - elem2.x;
    let yd = elem1.y - elem2.y;
    return Math.sqrt(xd * xd + yd * yd);
};