import { randomColor } from './utility';
import { c } from './main';

/*************************
 * Ball class, Allow us to 
 * keep a state for each instance
 *  of a ball
*************************/
class Ball {
    constructor(x, y) {
        this.radius = (Math.random() * 30 ) + 10; // Radius of the circle
        this.x = x; // The X initial position.
        this.y = y; // The Y initial position.
        this.dx = (Math.random() - 0.5) * 40; // The X velocity.
        this.dy = (Math.random() * 10) - 20; // The Y Velocity.
        this.borderColor = randomColor(); // Color Of the border of the circle.
        this.fillColor = randomColor(); // Color which will fill the circle.
        this.gravity = 1; // Use to attrack the ball to the floor.
        this.friction = .8; // Use to slow the velocity over the time.
    }

    // Method use to draw the initial ball.
    draw() {
        c.beginPath();
        c.arc(this.x,this.y, this.radius, 0, (Math.PI*2), false);
        c.strokeStyle = this.borderColor;
        c.fillStyle = this.fillColor;
        c.stroke();
        c.fill();
    }

    // Method use to repaint the ball every time requestAnimationFrame method is call.
    update() {
        if(this.x > innerWidth - this.radius || this.x < 0 + this.radius) {
            
            this.dx = -this.dx;
        }
        // If the position of the ball + the radius + the velocity force
        // (on Y axis) if going to pass or being equal of the bottom of the canvas 
        // Then lets reverse the velocity. it make then bounce the ball.
        // But in the same time lets apply some friction this way the velocity is 
        // going to be less and less strong and the ball will stop at some point.
        if(this.y + this.radius + this.dy >= canvas.height) {
            this.dy = -this.dy * this.friction;
            this.dx = this.dx * this.friction;
        } else {
            this.dy += this.gravity;
        }
        
        this.x += this.dx;
        this.y += this.dy;
        
        this.draw();
    }
}

export default Ball;