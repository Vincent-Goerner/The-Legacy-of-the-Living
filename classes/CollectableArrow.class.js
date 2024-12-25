class CollectableArrow extends MovableObject {
    width = 50;
    height = 50;
    y = 350;
    
    hitboxX;
    hitboxY = this.y + 15;
    hitboxWidth = 25;
    hitboxHeight = 25;

    world;

    constructor(x) {
        super().loadImage('./assets/pixel_art/samurai-pixel-art-sprite-sheets/Samurai_Archer/arrow_to_collect.png');
        this.x = x; 
        this.hitboxX = x + 15;
    }


    /**
    * Plays the sound when an arrow is collected.
    * 
    * @function collectedArrowSound
    * @memberof YourClassName
    * @returns {void}
    */
    collectedArrowSound() {
        this.playSoundLoop(this.collect_arrow_sound, 1.5);
    }
}