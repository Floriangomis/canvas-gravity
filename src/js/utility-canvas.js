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
}