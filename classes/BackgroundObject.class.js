class BackgroundObject extends MovableObject {
    width = 720;
    height = 480;

    isMoving;
    speed;


    constructor(imagePath, x, y, isMoving, speed) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = y;
        this.isMoving = isMoving;
        this.speed = speed;
    }


    /**
    * Handles the player's movement animation based on the given direction.
    * 
    * @function animate
    * @memberof YourClassName
    * @param {boolean} direction - The direction of movement; `true` for right, `false` for left.
    * @returns {void}
    */
    animate(direction) {
        if (this.isMoving && direction == false) {
            this.moveLeft();
        }
        if (this.isMoving && direction == true) {
            this.moveRight();
        }
    }
}