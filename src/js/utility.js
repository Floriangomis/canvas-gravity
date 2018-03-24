import { c } from './main';

/*****************
 * Utility Method
*****************/
// Method use to clean the canvas everytime the requestAnimationFrame method is called.
export function cleanCanvas() {
    c.clearRect(0, 0, canvas.width, canvas.height);
};

// Utility which return a random rgba color.
export function randomColor() {
    return "rgba("+parseInt(Math.random()*255)+", "+parseInt(Math.random()*255)+", "+parseInt(Math.random()*255)+", 1)";
};

export function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
};

export function writeOnCanvas(position, text) {
    c.font = "14px Arial";
    c.fillStyle = "white";
    c.fillText(text ,position.x,position.y);
}