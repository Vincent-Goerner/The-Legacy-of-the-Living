class Cloud extends MovableObject {
    speed = 0.15 + Math.random() * 0.05;


    constructor(img, x, y, width, height) {
        super().loadImage(img);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.animate();
        this.movingLoop();
    }


    /**
    * Handles the player's left movement animation at a constant interval.
    * 
    * @function animate
    * @memberof YourClassName
    * @returns {void}
    */
    animate() {
        setStoppableIntervall(() => {
            this.moveLeft();
        }, 1000 / 60);
    }


    /**
    * Creates a looping movement for the player, resetting their position when they exceed a specific limit.
    * 
    * @function movingLoop
    * @memberof YourClassName
    * @returns {void}
    */
    movingLoop() {
        setStoppableIntervall(() => {
            if (this.x < this.level_start_x - 200) {
                this.x = this.level_end_x + 400;
            }
        }, 1000);
    }
}