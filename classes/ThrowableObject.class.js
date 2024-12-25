class ThrowableObject extends MovableObject {
    width = 60;
    height = 40;
    initiator;

    hitboxX = this.x;
    hitboxY = this.y;
    hitboxWidth = 60;
    hitboxHeight = 40;
    hitboxOffset = 10;
    rotateDegree = 0;

    onGround = 380;
    otherDirection;

    constructor(x, y, otherDirection, initiator) {
        super().loadImage('./assets/pixel_art/samurai-pixel-art-sprite-sheets/Samurai_Archer/arrow.png');
        this.x = x;
        this.y = y;
        this.otherDirection = otherDirection;
        this.initiator = initiator;

        this.throw();
    }


    /**
    * Simulates the throwing of an object (such as an arrow), with gravity and movement.
    * 
    * @function throw
    * @memberof YourClassName
    */
    throw() {
        this.speedY = 2.5;
        this.applyGravity('arrow');
        setStoppableIntervall(() => {            
            if (this.otherDirection == false) {
                this.x += 25;
                this.hitboxX = this.x;
            } else {
                this.x -= 25;
                this.hitboxX = this.x;
            }
        }, 1000 / 60);
    }


    /**
    * Handles the collision of the thrown object with another object, stops its movement, and updates its state.
    * 
    * @function onCollision
    * @memberof YourClassName
    * @param {number} x - The new horizontal position of the object after collision.
    */
    onCollision(x) {
        clearInterval(intervalID[intervalID.length - 1]);
        this.loadImage('./assets/pixel_art/samurai-pixel-art-sprite-sheets/Samurai_Archer/arrow_on_ground.png');
        this.x = x;
        this.y = this.onGround;
    }
}