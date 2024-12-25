class EndBoss extends MovableObject {
    IMAGES_IDLE = [
        './assets/pixel_art/gorgon-pixel-art-character-sprite-sheets/Gorgon_3/Idle_1.png',
        './assets/pixel_art/gorgon-pixel-art-character-sprite-sheets/Gorgon_3/Idle_2.png',
        './assets/pixel_art/gorgon-pixel-art-character-sprite-sheets/Gorgon_3/Idle_3.png',
        './assets/pixel_art/gorgon-pixel-art-character-sprite-sheets/Gorgon_3/Idle_4.png',
        './assets/pixel_art/gorgon-pixel-art-character-sprite-sheets/Gorgon_3/Idle_5.png',
        './assets/pixel_art/gorgon-pixel-art-character-sprite-sheets/Gorgon_3/Idle_6.png',
        './assets/pixel_art/gorgon-pixel-art-character-sprite-sheets/Gorgon_3/Idle_7.png',
        './assets/pixel_art/gorgon-pixel-art-character-sprite-sheets/Gorgon_3/Idle_V2_1.png',
        './assets/pixel_art/gorgon-pixel-art-character-sprite-sheets/Gorgon_3/Idle_V2_2.png',
        './assets/pixel_art/gorgon-pixel-art-character-sprite-sheets/Gorgon_3/Idle_V2_3.png',
        './assets/pixel_art/gorgon-pixel-art-character-sprite-sheets/Gorgon_3/Idle_V2_4.png',
        './assets/pixel_art/gorgon-pixel-art-character-sprite-sheets/Gorgon_3/Idle_V2_5.png'
    ];
    IMAGES_WALKING = [
        './assets/pixel_art/gorgon-pixel-art-character-sprite-sheets/Gorgon_3/Walk_1.png',
        './assets/pixel_art/gorgon-pixel-art-character-sprite-sheets/Gorgon_3/Walk_2.png',
        './assets/pixel_art/gorgon-pixel-art-character-sprite-sheets/Gorgon_3/Walk_3.png',
        './assets/pixel_art/gorgon-pixel-art-character-sprite-sheets/Gorgon_3/Walk_4.png',
        './assets/pixel_art/gorgon-pixel-art-character-sprite-sheets/Gorgon_3/Walk_5.png',
        './assets/pixel_art/gorgon-pixel-art-character-sprite-sheets/Gorgon_3/Walk_6.png',
        './assets/pixel_art/gorgon-pixel-art-character-sprite-sheets/Gorgon_3/Walk_7.png',
        './assets/pixel_art/gorgon-pixel-art-character-sprite-sheets/Gorgon_3/Walk_8.png',
        './assets/pixel_art/gorgon-pixel-art-character-sprite-sheets/Gorgon_3/Walk_9.png',
        './assets/pixel_art/gorgon-pixel-art-character-sprite-sheets/Gorgon_3/Walk_10.png',
        './assets/pixel_art/gorgon-pixel-art-character-sprite-sheets/Gorgon_3/Walk_11.png',
        './assets/pixel_art/gorgon-pixel-art-character-sprite-sheets/Gorgon_3/Walk_12.png',
        './assets/pixel_art/gorgon-pixel-art-character-sprite-sheets/Gorgon_3/Walk_13.png'
    ];
    IMAGES_RUN = [
        './assets/pixel_art/gorgon-pixel-art-character-sprite-sheets/Gorgon_3/Run_1.png',
        './assets/pixel_art/gorgon-pixel-art-character-sprite-sheets/Gorgon_3/Run_2.png',
        './assets/pixel_art/gorgon-pixel-art-character-sprite-sheets/Gorgon_3/Run_3.png',
        './assets/pixel_art/gorgon-pixel-art-character-sprite-sheets/Gorgon_3/Run_4.png',
        './assets/pixel_art/gorgon-pixel-art-character-sprite-sheets/Gorgon_3/Run_5.png',
        './assets/pixel_art/gorgon-pixel-art-character-sprite-sheets/Gorgon_3/Run_6.png',
        './assets/pixel_art/gorgon-pixel-art-character-sprite-sheets/Gorgon_3/Run_7.png',
    ];
    IMAGES_ATTACK_2 = [
        './assets/pixel_art/gorgon-pixel-art-character-sprite-sheets/Gorgon_3/Attack_2_1.png',
        './assets/pixel_art/gorgon-pixel-art-character-sprite-sheets/Gorgon_3/Attack_2_2.png',
        './assets/pixel_art/gorgon-pixel-art-character-sprite-sheets/Gorgon_3/Attack_2_3.png',
        './assets/pixel_art/gorgon-pixel-art-character-sprite-sheets/Gorgon_3/Attack_2_4.png',
        './assets/pixel_art/gorgon-pixel-art-character-sprite-sheets/Gorgon_3/Attack_2_5.png',
        './assets/pixel_art/gorgon-pixel-art-character-sprite-sheets/Gorgon_3/Attack_2_6.png',
        './assets/pixel_art/gorgon-pixel-art-character-sprite-sheets/Gorgon_3/Attack_2_7.png',
        './assets/pixel_art/gorgon-pixel-art-character-sprite-sheets/Gorgon_3/Attack_2_8.png',
        './assets/pixel_art/gorgon-pixel-art-character-sprite-sheets/Gorgon_3/Attack_2_9.png',
        './assets/pixel_art/gorgon-pixel-art-character-sprite-sheets/Gorgon_3/Attack_2_10.png',
    ];
    IMAGES_SPEACIAL = [
        './assets/pixel_art/gorgon-pixel-art-character-sprite-sheets/Gorgon_3/Special_1.png',
        './assets/pixel_art/gorgon-pixel-art-character-sprite-sheets/Gorgon_3/Special_2.png',
        './assets/pixel_art/gorgon-pixel-art-character-sprite-sheets/Gorgon_3/Special_3.png',
        './assets/pixel_art/gorgon-pixel-art-character-sprite-sheets/Gorgon_3/Special_4.png',
        './assets/pixel_art/gorgon-pixel-art-character-sprite-sheets/Gorgon_3/Special_5.png',
    ];
    IMAGES_HIT = [
        './assets/pixel_art/gorgon-pixel-art-character-sprite-sheets/Gorgon_3/Hurt_1.png',
        './assets/pixel_art/gorgon-pixel-art-character-sprite-sheets/Gorgon_3/Hurt_2.png',
        './assets/pixel_art/gorgon-pixel-art-character-sprite-sheets/Gorgon_3/Hurt_3.png',
    ];
    IMAGES_DEAD = [
        './assets/pixel_art/gorgon-pixel-art-character-sprite-sheets/Gorgon_3/Dead_1.png',
        './assets/pixel_art/gorgon-pixel-art-character-sprite-sheets/Gorgon_3/Dead_2.png',
        './assets/pixel_art/gorgon-pixel-art-character-sprite-sheets/Gorgon_3/Dead_3.png'
    ];

    world;
    x = 3000;

    hitboxX = this.x;
    hitboxY = this.y + 80;
    hitboxWidth = 40;
    hitboxHeight = 80;
    hitboxOffset = 70;

    attentionY = this.y - 70;
    attentionWidth = 1025;
    attentionHeight = 250;
    attentionOffset = 500;


    otherDirection = true;
    speed = 1.5;
    isSpecialAttacking = false;

    health = 200;
    collision = 10;
    damageNormalAttack = 20;
    specialDamage = 50;

    constructor() {
        super().loadImage('./assets/pixel_art/gorgon-pixel-art-character-sprite-sheets/Gorgon_3/Idle_1.png');
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_RUN);
        this.loadImages(this.IMAGES_ATTACK_2);
        this.loadImages(this.IMAGES_SPEACIAL);
        this.loadImages(this.IMAGES_HIT);
        this.loadImages(this.IMAGES_DEAD);

        this.animate();
    }


    /**
    * Animates the movement, hurt, attack, and death sequences of the endboss.
    * 
    * @function animate
    * @memberof YourClassName
    * @returns {void}
    */
    animate() {
        setStoppableIntervall(() => {
            if (!gamePaused && this.health > 0) {
                this.endbossMovementAnimation();
                this.endbossHurtAnimation();
                this.endbossAttackAnimations();
            }
            if (this.health <= 0) {
                this.deathAnimation();
            }
        }, 1000 / 8);
    }


    /**
    * Animates the endboss's movement based on its health and movement state.
    * 
    * @function endbossMovementAnimation
    * @memberof YourClassName
    * @returns {void}
    */
    endbossMovementAnimation() {
        if (this.isMoving && this.health >= 100) {
            this.playSoundLoop(this.boss_walking_sound, 1);
            this.animateImages(this.IMAGES_WALKING);
        }
        if (this.isMoving && this.health < 100) {
            this.speed = 2.5;
            this.playSoundLoop(this.boss_walking_sound, 1.5);
            this.animateImages(this.IMAGES_RUN);
        }
        if (!this.isMoving) {
            this.animateImages(this.IMAGES_IDLE);
        }
    }


    /**
    * Animates the endboss's hurt state when it takes damage.
    * 
    * @function endbossHurtAnimation
    * @memberof YourClassName
    * @returns {void}
    */
    endbossHurtAnimation() {
        if (this.isHurt()) {
            this.playSoundOnce(this.boss_hurt_sound);
            this.animateImages(this.IMAGES_HIT);
        }
    }


    /**
    * Animates the endboss's attack actions.
    * 
    * @function endbossAttackAnimations
    * @memberof YourClassName
    * @returns {void}
    */
    endbossAttackAnimations() {
        if (this.isAttacking) {
            this.playAnimationOnce(this.IMAGES_ATTACK_2);
        }
        if (this.isSpecialAttacking) {
            this.playAnimationOnce(this.IMAGES_SPEACIAL);
        }
    }


    /**
    * Executes the endboss's attack scheme by attacking the player.
    * 
    * @function attackScheme
    * @memberof YourClassName
    * @returns {void}
    */
    attackScheme() {
        this.attackPlayer();
    }


    /**
    * Executes the endboss's attack on the player.
    * 
    * @function attackPlayer
    * @memberof YourClassName
    * @returns {void}
    */
    attackPlayer() {
        if (!this.attackCooldown) {
            this.isMoving = false;
            this.attackCooldown = true;
            this.isAttacking = true;
            setTimeout(() => {
                this.createAttack();
            }, 1000);
            setTimeout(() => {
                this.isAttacking = false;
            }, 1300);
            setTimeout(() => {
                this.attackCooldown = false;
            }, 2000);
        }
    }


    /**
    * Handles the endboss's death animation.
    * 
    * @function deathAnimation
    * @memberof YourClassName
    * @returns {void}
    */
    deathAnimation() {
        if (this.dead == false) {
            this.playAnimationOnce(this.IMAGES_DEAD);
            setTimeout(() => {
                this.dead = true
            }, 500);
        } else {
            this.loadImage('./assets/pixel_art/gorgon-pixel-art-character-sprite-sheets/Gorgon_3/Dead_3.png');
        }
    }
}