class Archer extends MovableObject {
    IMAGES_IDLE = [
        './assets/pixel_art/samurai-pixel-art-sprite-sheets/Samurai_Archer/Idle_1.png',
        './assets/pixel_art/samurai-pixel-art-sprite-sheets/Samurai_Archer/Idle_2.png',
        './assets/pixel_art/samurai-pixel-art-sprite-sheets/Samurai_Archer/Idle_3.png',
        './assets/pixel_art/samurai-pixel-art-sprite-sheets/Samurai_Archer/Idle_4.png',
        './assets/pixel_art/samurai-pixel-art-sprite-sheets/Samurai_Archer/Idle_5.png',
        './assets/pixel_art/samurai-pixel-art-sprite-sheets/Samurai_Archer/Idle_6.png',
        './assets/pixel_art/samurai-pixel-art-sprite-sheets/Samurai_Archer/Idle_7.png',
        './assets/pixel_art/samurai-pixel-art-sprite-sheets/Samurai_Archer/Idle_8.png'
    ];
    IMAGES_WALKING = [
        './assets/pixel_art/samurai-pixel-art-sprite-sheets/Samurai_Archer/Walk_1.png',
        './assets/pixel_art/samurai-pixel-art-sprite-sheets/Samurai_Archer/Walk_2.png',
        './assets/pixel_art/samurai-pixel-art-sprite-sheets/Samurai_Archer/Walk_3.png',
        './assets/pixel_art/samurai-pixel-art-sprite-sheets/Samurai_Archer/Walk_4.png',
        './assets/pixel_art/samurai-pixel-art-sprite-sheets/Samurai_Archer/Walk_5.png',
        './assets/pixel_art/samurai-pixel-art-sprite-sheets/Samurai_Archer/Walk_6.png',
        './assets/pixel_art/samurai-pixel-art-sprite-sheets/Samurai_Archer/Walk_7.png',
        './assets/pixel_art/samurai-pixel-art-sprite-sheets/Samurai_Archer/Walk_8.png'
    ];
    IMAGES_JUMP = [
        './assets/pixel_art/samurai-pixel-art-sprite-sheets/Samurai_Archer/Jump_4.png',
        './assets/pixel_art/samurai-pixel-art-sprite-sheets/Samurai_Archer/Jump_5.png',
        './assets/pixel_art/samurai-pixel-art-sprite-sheets/Samurai_Archer/Jump_6.png',
        './assets/pixel_art/samurai-pixel-art-sprite-sheets/Samurai_Archer/Jump_7.png',
        './assets/pixel_art/samurai-pixel-art-sprite-sheets/Samurai_Archer/Jump_8.png',
        './assets/pixel_art/samurai-pixel-art-sprite-sheets/Samurai_Archer/Jump_9.png'
    ];
    IMAGES_HIT = [
        './assets/pixel_art/samurai-pixel-art-sprite-sheets/Samurai_Archer/Hurt_1.png',
        './assets/pixel_art/samurai-pixel-art-sprite-sheets/Samurai_Archer/Hurt_2.png',
        './assets/pixel_art/samurai-pixel-art-sprite-sheets/Samurai_Archer/Hurt_3.png'
    ];
    IMAGES_DEAD = [
        './assets/pixel_art/samurai-pixel-art-sprite-sheets/Samurai_Archer/Dead_1.png',
        './assets/pixel_art/samurai-pixel-art-sprite-sheets/Samurai_Archer/Dead_2.png',
        './assets/pixel_art/samurai-pixel-art-sprite-sheets/Samurai_Archer/Dead_3.png',
        './assets/pixel_art/samurai-pixel-art-sprite-sheets/Samurai_Archer/Dead_4.png',
        './assets/pixel_art/samurai-pixel-art-sprite-sheets/Samurai_Archer/Dead_5.png'
    ];
    IMAGES_SHOT = [
        './assets/pixel_art/samurai-pixel-art-sprite-sheets/Samurai_Archer/Shot_1.png',
        './assets/pixel_art/samurai-pixel-art-sprite-sheets/Samurai_Archer/Shot_2.png',
        './assets/pixel_art/samurai-pixel-art-sprite-sheets/Samurai_Archer/Shot_3.png',
        './assets/pixel_art/samurai-pixel-art-sprite-sheets/Samurai_Archer/Shot_4.png',
        './assets/pixel_art/samurai-pixel-art-sprite-sheets/Samurai_Archer/Shot_5.png',
        './assets/pixel_art/samurai-pixel-art-sprite-sheets/Samurai_Archer/Shot_6.png',
        './assets/pixel_art/samurai-pixel-art-sprite-sheets/Samurai_Archer/Shot_7.png',
        './assets/pixel_art/samurai-pixel-art-sprite-sheets/Samurai_Archer/Shot_8.png',
        './assets/pixel_art/samurai-pixel-art-sprite-sheets/Samurai_Archer/Shot_9.png',
        './assets/pixel_art/samurai-pixel-art-sprite-sheets/Samurai_Archer/Shot_10.png',
        './assets/pixel_art/samurai-pixel-art-sprite-sheets/Samurai_Archer/Shot_11.png',
        './assets/pixel_art/samurai-pixel-art-sprite-sheets/Samurai_Archer/Shot_12.png',
        './assets/pixel_art/samurai-pixel-art-sprite-sheets/Samurai_Archer/Shot_13.png'
    ];
    IMAGES_ATTACK = [
        './assets/pixel_art/samurai-pixel-art-sprite-sheets/Samurai_Archer/Attack_1_1.png',
        './assets/pixel_art/samurai-pixel-art-sprite-sheets/Samurai_Archer/Attack_1_2.png',
        './assets/pixel_art/samurai-pixel-art-sprite-sheets/Samurai_Archer/Attack_1_3.png',
        './assets/pixel_art/samurai-pixel-art-sprite-sheets/Samurai_Archer/Attack_1_4.png',
        './assets/pixel_art/samurai-pixel-art-sprite-sheets/Samurai_Archer/Attack_1_5.png'
    ];
    IMAGES_HEAVY_ATTACK = [
        './assets/pixel_art/samurai-pixel-art-sprite-sheets/Samurai_Archer/Attack_3_1.png',
        './assets/pixel_art/samurai-pixel-art-sprite-sheets/Samurai_Archer/Attack_3_2.png',
        './assets/pixel_art/samurai-pixel-art-sprite-sheets/Samurai_Archer/Attack_3_3.png',
        './assets/pixel_art/samurai-pixel-art-sprite-sheets/Samurai_Archer/Attack_3_4.png',
        './assets/pixel_art/samurai-pixel-art-sprite-sheets/Samurai_Archer/Attack_3_5.png',
        './assets/pixel_art/samurai-pixel-art-sprite-sheets/Samurai_Archer/Attack_3_6.png'
    ];

    world;

    hitboxX = this.x;
    hitboxY = this.y + 80;
    hitboxWidth = 40;
    hitboxHeight = 80;
    hitboxOffset = 70;

    otherDirection = false;
    speed = 3;
    playerMoving = false;
    onGround = 240;
    deadAnimation = false;
    normalAttack = false;
    heavyAttack = false;
    bowAnimation = false;
    dead = false;

    damageShot = 20;
    damageNormalAttack = 10;
    damageHeavyAttack = 20;

    constructor() {
        super().loadImage('./assets/pixel_art/samurai-pixel-art-sprite-sheets/Samurai_Archer/Idle_1.png');
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMP);
        this.loadImages(this.IMAGES_HIT);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_SHOT);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_HEAVY_ATTACK);

        this.applyGravity('player');
        this.animate();
    }

    /**
    * Starts two intervals to animate and update the player actions and animations.
    * 
    * @function animate
    * @memberof YourClassName
    * @returns {void}
    */
    animate() {
        setStoppableIntervall(() => {
            this.playerActions();
        }, 1000 / 60);
        setStoppableIntervall(() => {
            this.playerAnimations();
        }, 1000 / 12);
    }

    /**
    * Handles player actions such as movement, jumping, and attacks if certain conditions are met.
    * 
    * @function playerActions
    * @memberof YourClassName
    * @returns {void}
    */
    playerActions() {
        if (this.health > 0 && !gamePaused && gameStarted && !this.bowAnimation && !this.normalAttack && !this.heavyAttack) {
            this.switchCameraDirection();
            this.playerMovment();
            this.playerJump();
            this.playerSpecial();
            this.playerNormalAttack();
            this.playerHeavyAttack();
        }
    }

    /**
    * Switches the camera direction based on player movement and camera constraints.
    * 
    * @function switchCameraDirection
    * @memberof YourClassName
    * @returns {void}
    */
    switchCameraDirection() {
        if (!this.otherDirection && this.world.keyboard.RIGHT) {
            this.world.camera_x -= 10;
            if (this.world.camera_x <= -this.x + 50) {
                this.world.camera_x = -this.x + 50
            }
        }
        if (this.otherDirection && this.world.keyboard.LEFT) {
            this.world.camera_x += 10;
            if (this.world.camera_x >= -this.x + 470) {
                this.world.camera_x = -this.x + 470;
            }
        }
    }

    /**
    * Handles the player's movement based on keyboard input and level boundaries.
    * 
    * @function playerMovment
    * @memberof YourClassName
    * @returns {void}
    */
    playerMovment() {
        if (this.world.keyboard.RIGHT && this.x < this.level_end_x) {
            this.moveRight();
            this.otherDirection = false;
            this.playerMoving = true;
        }
        if (this.world.keyboard.LEFT && this.x > this.level_start_x) {
            this.moveLeft();
            this.otherDirection = true;
            this.playerMoving = true;
        }
        if (this.x <= this.level_start_x || this.x >= this.level_end_x) {
            this.playerMoving = false;
        }
    }

    /**
    * Handles the player's jump action when the spacebar is pressed.
    * 
    * @function playerJump
    * @memberof YourClassName
    * @returns {void}
    */
    playerJump() {
        if (this.world.keyboard.SPACE && this.y == this.onGround && !this.jumpCooldown) {
            this.jump();
            setTimeout(() => {
                this.jumpCooldown = false;
            }, 1100);
        }
    }

    /**
    * Handles the player's special attack when the throw button is pressed.
    * 
    * @function playerSpecial
    * @memberof YourClassName
    * @returns {void}
    */
    playerSpecial() {
        if (this.world.keyboard.THROW && !this.throwCooldown && this.world.overlay.arrows.counter > 0 && !this.normalAttack && !this.heavyAttack) {
            this.world.overlay.arrows.setCount('-');
            this.bowAnimation = true;
            this.throwCooldown = true;
            this.playSoundAndAttack();
            setTimeout(() => {
                this.bowAnimation = false;
            }, 1250);
            setTimeout(() => {
                this.throwCooldown = false;
            }, 1300);
        }
    }

    /**
    * Plays the sound effects and triggers the creation of a throwable object for the special attack.
    * 
    * @function playSoundAndAttack
    * @memberof YourClassName
    * @returns {void}
    */
    playSoundAndAttack() {
        setTimeout(() => {
            this.playSoundLoop(this.bow_tension, 2);
        }, 450)
        setTimeout(() => {
            this.playSoundOnce(this.arrow_sound);
            this.createThrowableObj();
        }, 950);
    }

    /**
    * Handles the player's normal attack when the attack button is pressed.
    * 
    * @function playerNormalAttack
    * @memberof YourClassName
    * @returns {void}
    */
    playerNormalAttack() {
        if (this.world.keyboard.ATTACK && !this.attackCooldown && this.energy > 0 && this.y == this.onGround && !this.heavyAttack) {
            this.normalAttack = true;
            this.attackCooldown = true;
            setTimeout(() => {
                this.playSoundOnce(this.attack_sound);
                this.createAttack(true);
            }, 300);
            setTimeout(() => {
                this.normalAttack = false;
            }, 500);
            setTimeout(() => {
                this.attackCooldown = false;
            }, 1000);
        }
    }

    /**
    * Handles the player's heavy attack when the heavy attack button is pressed.
    * 
    * @function playerHeavyAttack
    * @memberof YourClassName
    * @returns {void}
    */
    playerHeavyAttack() {
        if (this.world.keyboard.HEAVY && !this.heavyAttackCooldown && this.energy > 1 && this.y == this.onGround && !this.normalAttack) {
            this.heavyAttack = true;
            this.heavyAttackCooldown = true;
            setTimeout(() => {
                this.playSoundOnce(this.attack_sound);
                this.createHeavyAttack(true);
            }, 300);
            setTimeout(() => {
                this.heavyAttack = false;
            }, 550);
            setTimeout(() => {
                this.heavyAttackCooldown = false;
            }, 750);
        }
    }

    /**
    * Handles the player's animations based on game state and player actions.
    * 
    * @function playerAnimations
    * @memberof YourClassName
    * @returns {void}
    */
    playerAnimations() {
        if (this.health > 0 && !this.bowAnimation && this.y == this.onGround && !this.heavyAttack && !this.normalAttack && !gamePaused) {
            this.playerMovmentAnimation();
        }
        if (this.health > 0) {
            this.playerJumpAnimation();
            this.playerHurtAnimation();
            this.playerAttackAnimation();
        }
        if (this.health <= 0) {
            this.deathAnimation();
        }
    }

    /**
    * Handles the player's movement animation based on keyboard input.
    * 
    * @function playerMovmentAnimation
    * @memberof YourClassName
    * @returns {void}
    */
    playerMovmentAnimation() {
        if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
            this.playSoundLoop(this.player_walking_sound, 1.5);
            this.animateImages(this.IMAGES_WALKING);
        }
        if (!this.world.keyboard.RIGHT && !this.world.keyboard.LEFT) {
            this.animateImages(this.IMAGES_IDLE);
            this.playerMoving = false;
        }
    }

    /**
    * Handles the player's jump animation when the player is above the ground.
    * 
    * @function playerJumpAnimation
    * @memberof YourClassName
    * @returns {void}
    */
    playerJumpAnimation() {
        if (this.isAboveGround()) {
            this.playSoundLoop(this.player_jump_sound, 1.5);
            this.animateImages(this.IMAGES_JUMP);
        }
    }

    /**
    * Handles the player's hurt animation when the player is hurt.
    * 
    * @function playerHurtAnimation
    * @memberof YourClassName
    * @returns {void}
    */
    playerHurtAnimation() {
        if (this.isHurt()) {
            this.playSoundLoop(this.player_hurt_sound, 1.5);
            this.animateImages(this.IMAGES_HIT);
        }
    }

    /**
    * Handles the player's attack animations based on the type of attack being performed.
    * 
    * @function playerAttackAnimation
    * @memberof YourClassName
    * @returns {void}
    */
    playerAttackAnimation() {
        if (this.bowAnimation && this.y == this.onGround && !this.jumpCooldown && !this.attackCooldown) {
            this.playAnimationOnce(this.IMAGES_SHOT);
        }
        if (this.normalAttack && !this.throwCooldown && this.y == this.onGround && !this.jumpCooldown) {
            this.playAnimationOnce(this.IMAGES_ATTACK);
        }
        if (this.heavyAttack && !this.throwCooldown && this.y == this.onGround && !this.jumpCooldown) {
            this.playAnimationOnce(this.IMAGES_HEAVY_ATTACK);
        }
    }

    /**
    * Handles the player's death animation and sound when the player dies.
    * 
    * @function deathAnimation
    * @memberof YourClassName
    * @returns {void}
    */
    deathAnimation() {
        if (this.dead == false) {
            this.playAnimationOnce(this.IMAGES_DEAD);
            this.playSoundOnce(this.player_death_sound);
            setTimeout(() => {
                this.dead = true
            }, 500);
        } else {
            this.y = this.onGround;
            this.loadImage('./assets/pixel_art/samurai-pixel-art-sprite-sheets/Samurai_Archer/Dead_5.png');
        }
    }
}