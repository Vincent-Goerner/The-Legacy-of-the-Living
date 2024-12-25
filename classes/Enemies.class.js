class Enemies extends MovableObject {
    IMAGES_IDLE = [
        './assets/pixel_art/skeleton-pixel-art-sprite-sheets/Skeleton_Warrior/Idle_1.png',
        './assets/pixel_art/skeleton-pixel-art-sprite-sheets/Skeleton_Warrior/Idle_2.png',
        './assets/pixel_art/skeleton-pixel-art-sprite-sheets/Skeleton_Warrior/Idle_3.png',
        './assets/pixel_art/skeleton-pixel-art-sprite-sheets/Skeleton_Warrior/Idle_4.png',
        './assets/pixel_art/skeleton-pixel-art-sprite-sheets/Skeleton_Warrior/Idle_5.png',
        './assets/pixel_art/skeleton-pixel-art-sprite-sheets/Skeleton_Warrior/Idle_6.png',
        './assets/pixel_art/skeleton-pixel-art-sprite-sheets/Skeleton_Warrior/Idle_7.png'
    ];
    IMAGES_WALKING = [
        './assets/pixel_art/skeleton-pixel-art-sprite-sheets/Skeleton_Warrior/Walk_1.png',
        './assets/pixel_art/skeleton-pixel-art-sprite-sheets/Skeleton_Warrior/Walk_2.png',
        './assets/pixel_art/skeleton-pixel-art-sprite-sheets/Skeleton_Warrior/Walk_3.png',
        './assets/pixel_art/skeleton-pixel-art-sprite-sheets/Skeleton_Warrior/Walk_4.png',
        './assets/pixel_art/skeleton-pixel-art-sprite-sheets/Skeleton_Warrior/Walk_5.png',
        './assets/pixel_art/skeleton-pixel-art-sprite-sheets/Skeleton_Warrior/Walk_6.png',
        './assets/pixel_art/skeleton-pixel-art-sprite-sheets/Skeleton_Warrior/Walk_7.png'
    ];
    IMAGES_HIT = [
        './assets/pixel_art/skeleton-pixel-art-sprite-sheets/Skeleton_Warrior/Hurt_1.png',
        './assets/pixel_art/skeleton-pixel-art-sprite-sheets/Skeleton_Warrior/Hurt_1.png'
    ];
    IMAGES_DEAD = [
        './assets/pixel_art/skeleton-pixel-art-sprite-sheets/Skeleton_Warrior/Dead_1.png',
        './assets/pixel_art/skeleton-pixel-art-sprite-sheets/Skeleton_Warrior/Dead_2.png',
        './assets/pixel_art/skeleton-pixel-art-sprite-sheets/Skeleton_Warrior/Dead_3.png',
        './assets/pixel_art/skeleton-pixel-art-sprite-sheets/Skeleton_Warrior/Dead_4.png'
    ];
    IMAGES_ATTACK = [
        './assets/pixel_art/skeleton-pixel-art-sprite-sheets/Skeleton_Warrior/Attack_2_1.png',
        './assets/pixel_art/skeleton-pixel-art-sprite-sheets/Skeleton_Warrior/Attack_2_2.png',
        './assets/pixel_art/skeleton-pixel-art-sprite-sheets/Skeleton_Warrior/Attack_2_3.png',
        './assets/pixel_art/skeleton-pixel-art-sprite-sheets/Skeleton_Warrior/Attack_2_4.png',
        './assets/pixel_art/skeleton-pixel-art-sprite-sheets/Skeleton_Warrior/Attack_2_5.png',
    ];

    world;
    x = 500 + Math.random() * 2000;

    hitboxX = this.x;
    hitboxY = this.y + 80;
    hitboxWidth = 40;
    hitboxHeight = 80;
    hitboxOffset = 70;

    attentionY = this.y - 70;
    attentionWidth = 780;
    attentionHeight = 250;
    attentionOffset = 300;

    otherDirection = true;
    speed = 0.5;
    dead = false;

    isAttacking = false;
    health = 20;
    collision = 5;
    damageNormalAttack = 10;

    constructor() {
        super().loadImage('./assets/pixel_art/skeleton-pixel-art-sprite-sheets/Skeleton_Warrior/Idle_1.png');
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_HIT);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_ATTACK);

        this.animate();
    }


    /**
    * Animates the enemy's movements, attacks, and other actions.
    * 
    * @function animate
    * @memberof YourClassName
    * @returns {void}
    */
    animate() {
        setStoppableIntervall(() => {
            if (!gamePaused && this.health > 0) {
                this.enemyMovementAnimation();
                this.enemyHurtAnimation();
                this.enemyAttackAnimation();
            }
            if (this.health <= 0) {
                this.deathAnimation();
            }
        }, 1000 / 7);
    }


    /**
    * Animates the enemy's movement based on its state.
    * 
    * @function enemyMovementAnimation
    * @memberof YourClassName
    * @returns {void}
    */
    enemyMovementAnimation() {
        if (this.isMoving) {
            this.animateImages(this.IMAGES_WALKING);
        }
        if (!this.isMoving) {
            this.animateImages(this.IMAGES_IDLE);
        }
    }


    /**
    * Animates the enemy's hurt state when it takes damage.
    * 
    * @function enemyHurtAnimation
    * @memberof YourClassName
    * @returns {void}
    */
    enemyHurtAnimation() {
        if (this.isHurt()) {
            this.playSoundOnce(this.skeleton_hurt_sound);
            this.animateImages(this.IMAGES_HIT);
        }
    }


    /**
    * Animates the enemy's attack action.
    * 
    * @function enemyAttackAnimation
    * @memberof YourClassName
    * @returns {void}
    */
    enemyAttackAnimation() {
        if (this.isAttacking) {
            this.playAnimationOnce(this.IMAGES_ATTACK);
        }
    }


    /**
    * Executes the attack scheme for the enemy, which involves stopping movement and attacking the player.
    * 
    * @function attackScheme
    * @memberof YourClassName
    * @returns {void}
    */
    attackScheme() {
        this.isMoving = false;
        this.attackPlayer();
    }


    /**
    * Executes the enemy's attack on the player.
    * 
    * @function attackPlayer
    * @memberof YourClassName
    * @returns {void}
    */
    attackPlayer() {
        if (!this.attackCooldown) {
            this.attackCooldown = true;
            this.isAttacking = true;
            setTimeout(() => {
                this.playSoundOnce(this.attack_sound);
            }, 300);
            setTimeout(() => {
                this.createAttack();
            }, 500);
            setTimeout(() => {
                this.isAttacking = false;
            }, 725);
            setTimeout(() => {
                this.attackCooldown = false;
            }, 2000);
        }
    }


    /**
    * Animates the enemy's death sequence.
    * 
    * @function deathAnimation
    * @memberof YourClassName
    * @returns {void}
    */
    deathAnimation() {
        if (this.dead == false) {
            this.playSoundOnce(this.skeleton_death_sound);
            this.playAnimationOnce(this.IMAGES_DEAD);
            setTimeout(() => {
                this.dead = true
            }, 500);
        } else {
            this.loadImage('./assets/pixel_art/skeleton-pixel-art-sprite-sheets/Skeleton_Warrior/Dead_4.png');
        }
    }
}