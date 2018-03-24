// Utility which return a random rgba color.
export function randomColor() {
    return "rgba("+parseInt(Math.random()*255)+", "+parseInt(Math.random()*255)+", "+parseInt(Math.random()*255)+", 1)";
};

// Return a number between 2 given number
export function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
};