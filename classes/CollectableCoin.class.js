class CollectableCoin extends MovableObject {
    IMAGES_IDLE = [
        './assets/pixel_art/swamp-game-tileset-pixel-art/4 Animated objects/Coin_1.png',
        './assets/pixel_art/swamp-game-tileset-pixel-art/4 Animated objects/Coin_2.png',
        './assets/pixel_art/swamp-game-tileset-pixel-art/4 Animated objects/Coin_3.png',
        './assets/pixel_art/swamp-game-tileset-pixel-art/4 Animated objects/Coin_4.png',
    ];

    width = 20;
    height = 20;

    hitboxX;
    hitboxY;
    hitboxWidth = 20;
    hitboxHeight = 20;

    world;


    constructor(x, y) {
        super().loadImage('./assets/pixel_art/swamp-game-tileset-pixel-art/4 Animated objects/Coin_1.png');
        this.loadImages(this.IMAGES_IDLE);
        this.x = x;
        this.y = y;
        this.hitboxX = x;
        this.hitboxY = y;

        this.animate();
    }


    /**
    * Plays the idle animation for the player at a fixed interval.
    * 
    * @function animate
    * @memberof YourClassName
    * @returns {void}
    */
    animate() {
        setStoppableIntervall(() => {
            this.animateImages(this.IMAGES_IDLE);
        }, 1000 / 8);
    }


    /**
    * Plays the sound when a coin is collected.
    * 
    * @function collectedCoinSound
    * @memberof YourClassName
    * @returns {void}
    */
    collectedCoinSound() {
        this.playSoundLoop(this.collect_coin_sound, 1.5);
    }
}