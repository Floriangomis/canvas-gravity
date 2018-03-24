import { randomColor } from './utility';
import { distanceBetweenTwoElement } from './utility-canvas';
import { c, arrayOfCircle } from './main';

/*************************
 * Ball class, Allow us to 
 * keep a state for each instance
 *  of a ball
*************************/
class Ball {
    constructor(x, y, option={}) {
        this.radius = (Math.random() * 30 ) + 10; // Radius of the circle
        this.x = x; // The X initial position.
        this.y = y; // The Y initial position.
        this.dx = (Math.random() - 0.5) * 40; // The X velocity.
        this.dy = (Math.random() * 10) - 20; // The Y Velocity.
        this.borderColor = randomColor(); // Color Of the border of the circle.
        this.fillColor = randomColor(); // Color which will fill the circle.
        this.gravity = 1; // Use to attrack the ball to the floor.
        this.friction = .9; // Use to slow the velocity over the time.
        this.option = option;
    }

    // Method use to draw the initial ball.
    draw() {
        c.beginPath();
        c.arc(this.x,this.y, this.radius, 0, (Math.PI*2), false);
        c.strokeStyle = this.borderColor;
        c.fillStyle = this.fillColor;
        c.stroke();
        c.fill();
    };

    // Method use to repaint the ball every time requestAnimationFrame method is call.
    update() {
        this.checkBorderXCollision();
        this.checkBorderYCollision();
        
        // Apply the velocity to the position
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
        if(this.option && this.option.showClose) {
            this.displayLineBetweenCloseBalls();
        }
    };

    // If the circle is about to touch the X border of the canvas reverse the velocity of X
    // to send the object at the opposite position
    checkBorderXCollision() {
        if(this.x > innerWidth - this.radius || this.x < 0 + this.radius) {
            this.dx = -this.dx;
        }
    };
    // If the circle touch the floor reverse his velocity.
    // If a circle doesn't have anymore velocity remove it from the canvas.
    // Otherwise Apply gravity to it
    checkBorderYCollision() {
        if(this.y + this.radius + this.dy > canvas.height) {
            this.dy = -this.dy * this.friction; // Reverse and apply friction
            this.dx = this.dx * this.friction; // Apply friction on the X movement also
            // If no more movement simply remove the object.
            if(this.option && this.option.autoDestroy) {
                if(Math.floor(this.dy) >= 0) {
                    this.destroy();
                }
            }
        } else {
            this.dy += this.gravity;
        }
    };

    // Draw a line between 2 balls when they are at less than 200 pixel
    displayLineBetweenCloseBalls() {
        for (let index = 0; index < arrayOfCircle.length; index++) {
            let d = distanceBetweenTwoElement( {x:this.x, y:this.y}, {x:arrayOfCircle[index].x, y:arrayOfCircle[index].y} );
            if ( d < 200 ) {
                c.beginPath();
                c.lineWidth = 1;
                c.moveTo(this.x, this.y);
                c.lineTo(arrayOfCircle[index].x, arrayOfCircle[index].y);
                c.stroke();
                c.closePath();
            }
        };
    };

    // When no more velocity wai do not display it anymore 
    // ( Checking that the x and y properties are defined in the loop otherwise 
    // pop the ball from the array ).
    destroy() {
        this.x = undefined;
        this.y = undefined;
    };
}

export default Ball;