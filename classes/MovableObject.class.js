class MovableObject extends DrawableObjects {
    attack_sound = './assets/audio/melee_attack.mp3';
    arrow_sound = './assets/audio/firing_arrow.mp3';
    bow_tension = './assets/audio/bow_tension.mp3';

    player_walking_sound = './assets/audio/player_walking.wav';
    player_jump_sound = './assets/audio/jump.mp3';
    player_jump_landing_sound = './assets/audio/jump_landing.mp3';
    player_hurt_sound = './assets/audio/player_hurt.mp3';
    player_death_sound = './assets/audio/player_death.mp3';

    skeleton_walking_sound = './assets/audio/skeleton_walking_2.wav';
    skeleton_hurt_sound = './assets/audio/skeleton_hurt.mp3';
    skeleton_death_sound = './assets/audio/skeleton_hurt.mp3';

    boss_idle_sound = './assets/audio/boss_idle.mp3';
    boss_walking_sound = './assets/audio/boss_walking.mp3';
    boss_hurt_sound = './assets/audio/boss_hurt.mp3';
    boss_death_sound = './assets/audio/boss_death.mp3';

    collect_arrow_sound = './assets/audio/collect_arrow.mp3';
    collect_coin_sound = './assets/audio/collect_coin.mp3';

    speed = 1;
    speedY = 0;
    acceleration = 1;
    lastHit = 0;
    animationIndex = 0;
    lastAnimation;
    isMoving = false;

    level_start_x = -1250;
    level_end_x = 3500;

    jumpCooldown = false;
    throwCooldown = false;
    attackCooldown = false;
    heavyAttackCooldown = false;
    specialAttackCooldown = false;

    health = 100;


    constructor() {
        super();
    }


    /**
    * Applies gravity to an object, affecting its vertical position and speed.
    * 
    * @function applyGravity
    * @memberof YourClassName
    * @param {string} obj - The type of object being affected by gravity. Can be 'player' or 'arrow'.
    * @returns {void}
    */
    applyGravity(obj) {
        setStoppableIntervall(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
                if (obj == 'player') {
                    this.hitboxY = this.y + 80;
                }
                if (obj == 'arrow') {
                    this.hitboxY = this.y;
                }
            }
        }, 1000 / 40);
    }


    /**
    * Checks if the object is above the ground.
    * 
    * @function isAboveGround
    * @memberof YourClassName
    * @returns {boolean} `true` if the object is above the ground, `false` otherwise.
    */
    isAboveGround() {
        return this.y < this.onGround;
    }


    /**
    * Makes the object jump by setting the vertical speed.
    * 
    * @function jump
    * @memberof YourClassName
    */
    jump() {
        this.speedY = 15;
        this.jumpCooldown = true;
    }


    /**
    * Moves the object towards the player depending on the player's position.
    * 
    * @function moveToPlayer
    * @memberof YourClassName
    * @param {Object} player - The player object that the current object will move towards.
    */
    moveToPlayer(player) {
        if (this.health > 0 && !gamePaused) {
            this.moveToPlayerIfLeft(player);
            this.moveToPlayerIfRight(player);
        }
        if (gamePaused) {
            this.isMoving = false;
        }
    }


    /**
    * Moves the object towards the player if the player is to the left of the object.
    * 
    * @function moveToPlayerIfLeft
    * @memberof YourClassName
    * @param {Object} player - The player object that the current object is moving towards.
    */
    moveToPlayerIfLeft(player) {
        if (!this.isAttacking && player.x + 80 < this.x) {
            this.isMoving = true;
            this.moveLeft();
            this.otherDirection = true;
        } else {
            if (player.x < this.x && player.x + 80 > this.x) { // für boss überarbeiten, sowie extra Klassen für Attacks
                this.attackScheme(player);
            }
        }
    }


    /**
    * Moves the object towards the player if the player is to the right of the object.
    * 
    * @function moveToPlayerIfRight
    * @memberof YourClassName
    * @param {Object} player - The player object that the current object is moving towards.
    */
    moveToPlayerIfRight(player) {
        if (!this.isAttacking && player.x > this.x + 80) {
            this.isMoving = true;
            this.moveRight();
            this.otherDirection = false;
        } else {
            if (player.x > this.x && player.x < this.x + 80) { // für boss überarbeiten, sowie extra Klassen für Attacks
                this.attackScheme(player);
            }
        }
    }


    /**
    * Moves the object to the right by a certain speed, adjusting its hitbox position.
    * 
    * @function moveRight
    * @memberof YourClassName
    */
    moveRight() {
        if (this instanceof Enemies || this instanceof EndBoss) {
            if (this.isMoving) {
                this.hitboxX = this.x + 70;
                this.x += this.speed;
            }
        } else {
            this.hitboxX = this.x + 70;
            this.x += this.speed;
        }
    }


    /**
    * Moves the object to the left by a certain speed, adjusting its hitbox position.
    * 
    * @function moveLeft
    * @memberof YourClassName
    */
    moveLeft() {
        if (this instanceof Enemies || this instanceof EndBoss) {
            if (this.isMoving) {
                this.hitboxX = this.x - 70;
                this.x -= this.speed;
            }
        } else {
            this.hitboxX = this.x - 70;
            this.x -= this.speed;
        }
    }


    /**
    * Creates a throwable object (e.g., an arrow) and adds it to the world's throwable objects array.
    * 
    * @function createThrowableObj
    * @memberof YourClassName
    */
    createThrowableObj() {
        if (!this.otherDirection) {
            let arrow = new ThrowableObject(this.x + 80, this.y + 85, this.otherDirection, this);
            this.world.throwableObj.push(arrow);
        } else {
            let arrow = new ThrowableObject(this.x - 10, this.y + 85, this.otherDirection, this);
            this.world.throwableObj.push(arrow);
        }
    }


    /**
    * Creates a normal attack (e.g., a sword strike) and adds it to the world's attack array.
    * 
    * @param {Object} player - The player object, if present, to reduce energy when the attack is created.
    * @function createAttack
    * @memberof YourClassName
    */
    createAttack(player) {
        if (player) {
            this.energy -= 1;
        }
        if (!this.otherDirection) {
            let normalAttack = new NormalAttack(this.x + 130, this.y + 80, this);
            this.world.attacks.push(normalAttack);
        } else {
            let normalAttack = new NormalAttack(this.x, this.y + 80, this);
            this.world.attacks.push(normalAttack);
        }
    }


    /**
    * Creates a heavy attack (e.g., a powerful strike) and adds it to the world's attack array.
    * 
    * @param {Object} player - The player object, if present, to reduce energy when the heavy attack is created.
    * @function createHeavyAttack
    * @memberof YourClassName
    */
    createHeavyAttack(player) {
        if (player) {
            this.energy -= 3;
        }
        if (!this.otherDirection) {
            let heavyAttack = new HeavyAttack(this.x + 110, this.y + 95, this);
            this.world.attacks.push(heavyAttack);
        } else {
            let heavyAttack = new HeavyAttack(this.x, this.y + 95, this);
            this.world.attacks.push(heavyAttack);
        }
    }


    /**
    * Plays a sound once from the world's sound collection.
    * 
    * @param {string} src - The key to the sound file in the `world.sounds` object.
    * @function playSoundOnce
    * @memberof YourClassName
    */
    playSoundOnce(src) {
        let sound = this.world.sounds[src];
        sound.play();
    }


    /**
    * Plays a sound in a loop with a specified playback speed.
    * 
    * @param {string} src - The key to the sound file in the `world.sounds` object.
    * @param {number} playbackSpeed - The speed at which to play the sound (1.0 is normal speed).
    * @function playSoundLoop
    * @memberof YourClassName
    */
    playSoundLoop(src, playbackSpeed) {
        let sound = this.world.sounds[src];
        sound.playbackRate = playbackSpeed;
        sound.play();
    }


    /**
    * Animates the object by cycling through an array of image paths.
    * 
    * @param {Array<string>} action - An array of image paths representing the frames of the animation.
    * @function animateImages
    * @memberof YourClassName
    */
    animateImages(action) {
        let i = this.currentImage % action.length; // z.B.: let i = 5 % 6; => 0, Rest 5 --> i = 0, 1, 2, 3, 4, 5, 0, 1,...
        let path = action[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }


    /**
    * Plays the given animation once by cycling through the image paths in the action array.
    * 
    * @param {Array<string>} action - An array of image paths representing the frames of the animation.
    * @function playAnimationOnce
    * @memberof YourClassName
    */
    playAnimationOnce(action) {
        if (this.lastAnimation == action) {
            if (this.animationIndex < action.length) {
                let path = action[this.animationIndex];
                this.img = this.imageCache[path];
                this.animationIndex++;
            } else {
                this.animationIndex = 0;
            }
        } else {
            this.lastAnimation = action;
            this.animationIndex = 0;
            this.playAnimationOnce(action);
        }
    }


    /**
    * Checks if two objects are colliding based on their hitboxes.
    * 
    * @returns {boolean} - Returns `true` if the hitboxes of the two objects are colliding, `false` otherwise.
    * @function isColliding
    * @memberof YourClassName
    */
    isColliding(obj) {
        if (this.otherDirection && obj.otherDirection) {
            return (this.hitboxX + this.hitboxWidth + this.hitboxOffset) >= obj.hitboxX + obj.hitboxOffset && this.hitboxX + this.hitboxOffset <= (obj.hitboxX + obj.hitboxWidth + obj.hitboxOffset) &&
                (this.hitboxY + this.hitboxHeight) >= obj.hitboxY && this.hitboxY <= (obj.hitboxY + obj.hitboxHeight);}
        if (this.otherDirection && !obj.otherDirection) {
            return (this.hitboxX + this.hitboxWidth + 2 * this.hitboxOffset) >= obj.hitboxX && this.hitboxX + 2 * this.hitboxOffset <= (obj.hitboxX + obj.hitboxWidth) &&
                (this.hitboxY + this.hitboxHeight) >= obj.hitboxY && this.hitboxY <= (obj.hitboxY + obj.hitboxHeight);}
        if (!this.otherDirection && obj.otherDirection) {
            return (this.hitboxX + this.hitboxWidth) >= obj.hitboxX + 2 * obj.hitboxOffset && this.hitboxX <= (obj.hitboxX + obj.hitboxWidth + 2 * obj.hitboxOffset) &&
                (this.hitboxY + this.hitboxHeight) >= obj.hitboxY && this.hitboxY <= (obj.hitboxY + obj.hitboxHeight);}
        if (!this.otherDirection && !obj.otherDirection) {
            return (this.hitboxX + this.hitboxWidth) >= obj.hitboxX && this.hitboxX <= (obj.hitboxX + obj.hitboxWidth) &&
                (this.hitboxY + this.hitboxHeight) >= obj.hitboxY && this.hitboxY <= (obj.hitboxY + obj.hitboxHeight);}
    }


    /**
    * Checks if the current object is within the attention range of another object.
    * 
    * @returns {boolean} - Returns `true` if the current object is within the attention range of the target object, 
    * `false` otherwise.
    * @function getAttention
    * @memberof YourClassName
    */
    getAttention(obj) {
        if (this.otherDirection) {
            this.movingDirection = 'left';
            return (this.hitboxX + this.hitboxWidth + 2 * this.hitboxOffset) >= obj.x - obj.attentionOffset && this.hitboxX + 2 * this.hitboxOffset <= (obj.x + obj.width + obj.attentionOffset) &&
                (this.hitboxY + this.hitboxHeight) >= obj.attentionY && this.hitboxY <= (obj.attentionY + obj.attentionHeight);
        } else {
            this.movingDirection = 'right';
            return (this.hitboxX + this.hitboxWidth) >= obj.x - obj.attentionOffset && this.hitboxX <= (obj.x + obj.width + obj.attentionOffset) &&
                (this.hitboxY + this.hitboxHeight) >= obj.attentionY && this.hitboxY <= (obj.attentionY + obj.attentionHeight);
        }
    }


    /**
    * Reduces the health of the object by the specified damage value.
    * 
    * @param {number} damage - The amount of damage to subtract from the object's health.
    * 
    * @returns {void} - This method does not return any value.
    * @function hit
    * @memberof YourClassName
    */
    hit(damage) {
        this.health -= damage;
        this.lastHit = new Date();
    };


    /**
    * Checks if the object has recently been hurt, based on the time passed since the last hit.
    * 
    * @returns {boolean} - Returns `true` if the object has been hurt within the last 0.2 seconds, otherwise `false`.
    * @function isHurt
    * @memberof YourClassName
    */
    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit; // Differenz in Millisekunden
        timepassed = timepassed / 1000; // Differenz in s
        return timepassed < 0.2;
    }
}