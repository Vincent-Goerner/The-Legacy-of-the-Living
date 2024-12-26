class World {
    character = new Archer();
    level = level1;
    overlay = hub;
    sounds = audio;

    throwableObj = [];
    collidedThrowObj = [];
    attacks = [];
    deadEnemies = [];

    regenerationCooldown = false;
    gameEnd = false;
    bossSpoted = false;

    canvas;
    ctx;
    keyboard;
    camera_x = 0;


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.setHitbox();
        this.setSound();
        this.run();
    }


    /**
    * Assigns the current world context to the character, enemies, 
    * collectable arrows, and collectable coins in the level.
    * 
    * @function setWorld
    * @memberof GameWorld
    * @returns {void} This method does not return a value.
    */
    setWorld() {
        this.character.world = this;
        this.level.enemies.forEach(enemy => {
            enemy.world = this;
        });
        this.level.collectableArrow.forEach(arrow => {
            arrow.world = this;
        });
        this.level.collectableCoin.forEach(coin => {
            coin.world = this;
        });
    }


    /**
    * Adjusts the hitboxes of the character and the enemies in the level.
    * 
    * @function setHitbox
    * @memberof GameWorld
    * @returns {void} This method does not return a value.
    */
    setHitbox() {
        this.character.hitboxX += this.character.hitboxOffset;
        this.level.enemies.forEach(enemy => {
            enemy.hitboxX -= enemy.hitboxOffset;
        })
    }


    /**
    * Loops through the enemies in the level and plays the walking sound for enemies 
    * that are moving and within a specific range of the character.
    * 
    * @function setSound
    * @memberof GameWorld
    * @returns {void} This method does not return a value.
    */
    setSound() {
        setStoppableIntervall(() => {
            this.level.enemies.forEach(enemy => {
                if (enemy.isMoving && enemy.x > this.character.x - 200 && enemy.x < this.character.x + 720) {
                    enemy.playSoundLoop(enemy.skeleton_walking_sound, 1.4);
                }
            })
        }, 1000 / 60);
    }


    /**
    * Starts and manages periodic updates for various game functions.
    * 
    * @function run
    * @memberof GameWorld
    * @returns {void} This method does not return a value.
    */
    run() {
        setStoppableIntervall(() => {
            this.clearDeadEnemies();
        }, 5000);
        setStoppableIntervall(() => {
            this.regenerateEnergy();
            this.checkCharacterCollisions();
        }, 500);
        setStoppableIntervall(() => {
            this.checkForGameEnd();
            this.playBossMusic();
            this.playGameMusic();
        }, 100);
        setStoppableIntervall(() => {
            this.checkCollectableCollisions();
            this.checkforAttention();
            this.checkThrownCollisions();
            this.checkAttackCollisions();
            this.backgroundMoving();
        }, 1000 / 60);
    }


    clearDeadEnemies() {
        if (this.deadEnemies.length > 0) {
            this.deadEnemies.splice(0, 1);
        }
    }


    /**
    * Regenerates the character's energy when it's below a certain threshold.
    * 
    * @function regenerateEnergy
    * @memberof GameWorld
    * @returns {void} This method does not return a value.
    */
    regenerateEnergy() {
        if (this.character.energy < 5 && !this.regenerationCooldown) {
            this.regenerationCooldown = true;
            setTimeout(() => {
                this.character.energy += 1;
                this.overlay.regenerateEnergy(this.character.energy);
                this.regenerationCooldown = false;
            }, 2000);
        }
    }


    /**
    * Checks for collisions between the character and enemies.
    * 
    * @function checkCharacterCollisions
    * @memberof GameWorld
    * @returns {void} This method does not return a value.
    */
    checkCharacterCollisions() {
        this.level.enemies.forEach(enemy => {
            if (this.character.isColliding(enemy)) {
                this.character.hit(enemy.collision);
                this.overlay.setHealth(this.character.health);
            }
        });
    }


    /**
    * Checks if the game has ended based on the character's health or the status of the last enemy.
    * 
    * @function checkForGameEnd
    * @memberof GameWorld
    * @returns {void} This method does not return a value.
    */
    checkForGameEnd() {
        if (this.character.health <= 0 && !this.gameEnd) {
            this.gameEnd = true;
            this.character.playSoundOnce('./assets/audio/defeat.mp3');
            toggleOverlay();
            toggleGameOverlay();
            loadGameOverScreen();
        }
        if (this.level.enemies[this.level.enemies.length - 1].health <= 0 && !this.gameEnd) {
            this.gameEnd = true;
            toggleOverlay();
            toggleGameOverlay();
            loadWinScreen();
        }
    }


    /**
    * Plays the boss fight music when the character is close to the last enemy in the level.
    * 
    * @function playBossMusic
    * @memberof GameWorld
    * @returns {void} This method does not return a value.
    */
    playBossMusic() {
        let sound = this.sounds['./assets/audio/boss_fight_1.mp3'];
        if (this.character.x > this.level.enemies[this.level.enemies.length - 1].x - 720) {
            sound.play();
            this.bossSpoted = true;
        }
        if (this.gameEnd || !gameStarted || menuMusic) {
            sound.pause();
        }
    }


    /**
    * Plays or pauses the background game music based on the current game state.
    * 
    * @function playGameMusic
    * @memberof GameWorld
    * @returns {void} This method does not return a value.
    */
    playGameMusic() {
        let sound = this.sounds['./assets/audio/background_2.mp3'];
        if (!this.bossSpoted && !sound.play() && gameStarted) {
            sound.play();
        }
        if (this.bossSpoted || this.gameEnd || menuMusic) {
            sound.pause();
        }
    }


    /**
    * Checks for collisions between the character and collectable items (arrows and coins).
    * 
    * @function checkCollectableCollisions
    * @memberof GameWorld
    * @returns {void} This method does not return a value.
    */
    checkCollectableCollisions() {
        this.level.collectableArrow.forEach((arrow, index) => {
            if (this.character.isColliding(arrow)) {
                this.overlay.arrows.setCount('+');
                arrow.collectedArrowSound();
                this.level.collectableArrow.splice(index, 1);
            }
        });
        this.level.collectableCoin.forEach((coin, index) => {
            if (this.character.isColliding(coin)) {
                this.overlay.coins.setCount('+');
                coin.collectedCoinSound();
                this.level.collectableCoin.splice(index, 1);
            }
        });
    }


    /**
    * Checks if enemies should pay attention to the character and move towards it.
    * 
    * @function checkforAttention
    * @memberof GameWorld
    * @returns {void} This method does not return a value.
    */
    checkforAttention() {
        this.level.enemies.forEach(enemy => {
            if (this.character.getAttention(enemy)) {
                enemy.moveToPlayer(this.character);
            } else {
                enemy.isMoving = false;
            }
        });
    }


    /**
    * Checks for collisions between thrown objects (e.g., arrows) and enemies or the ground.
    * 
    * @function checkThrownCollisions
    * @memberof GameWorld
    * @returns {void} This method does not return a value.
    */
    checkThrownCollisions() {
        this.throwableObj.forEach((arrow, i) => {
            this.level.enemies.forEach((enemy, index) => {
                if (enemy.isColliding(arrow)) {
                    this.onEnemyThrowableCollision(arrow, i, enemy);
                    this.ifThrowableEnemyKilled(enemy, index);
                } else {
                    if (!enemy.isColliding(arrow) && arrow.y >= 380) {
                        this.onGroundThrowableCollison(arrow, i);
                    }
                }
            });
        })
    }


    /**
    * Handles the collision between a thrown object (e.g., an arrow) and an enemy.
    * 
    * @function onEnemyThrowableCollision
    * @memberof GameWorld
    * @param {Object} arrow - The thrown object (e.g., an arrow) that collided with the enemy.
    * @param {number} i - The index of the throwable object in the `throwableObj` array.
    * @param {Object} enemy - The enemy object that the throwable collided with.
    * @returns {void} This method does not return a value.
    */
    onEnemyThrowableCollision(arrow, i, enemy) {
        enemy.hit(arrow.initiator.damageShot);
        arrow.onCollision(enemy.x + enemy.width / 2);
        this.throwableObj.splice(i, 1);
        this.collidedThrowObj.push(arrow);
    }


    /**
    * Handles the logic when an enemy is killed by a throwable object.
    * 
    * @function ifThrowableEnemyKilled
    * @memberof GameWorld
    * @param {Object} enemy - The enemy object that might have been killed by a throwable object.
    * @param {number} index - The index of the enemy in the `level.enemies` array.
    * @returns {void} This method does not return a value.
    */
    ifThrowableEnemyKilled(enemy, index) {
        if (enemy instanceof EndBoss) {
            this.overlay.setBossHp(this.level.enemies[this.level.enemies.length - 1].health);
        }
        if (enemy.health <= 0 && enemy instanceof Enemies) {
            this.level.enemies.splice(index, 1);
            this.deadEnemies.push(enemy);
        }
    }


    /**
    * Handles the collision of a throwable object when it hits the ground.
    * 
    * @function onGroundThrowableCollison
    * @memberof GameWorld
    * @param {Object} arrow - The throwable object that has collided with the ground.
    * @param {number} i - The index of the arrow in the `throwableObj` array.
    * @returns {void} This method does not return a value.
    */
    onGroundThrowableCollison(arrow, i) {
        arrow.onCollision(arrow.x);
        this.throwableObj.splice(i, 1);
        this.collidedThrowObj.push(arrow);
    }


    /**
    * Checks for collisions between the character's attacks and the level's enemies.
    * 
    * @function checkAttackCollisions
    * @memberof GameWorld
    * @returns {void} This method does not return a value.
    */
    checkAttackCollisions() {
        this.attacks.forEach((attack, i) => {
            this.level.enemies.forEach((enemy, index) => {
                if (enemy.isColliding(attack)) {
                    this.onEnemyAttackCollision(attack, i, enemy)
                    this.ifAttackEnemyKilled(enemy, index);
                } else {
                    if (!enemy.isColliding(attack)) {
                        this.overlay.setEnergy(this.character.energy);
                        this.attacks.splice(i, 1);
                    }
                }
            });
            this.onPlayerAttackCollision(attack, i);
        })
    }


    /**
    * Handles the collision between an enemy and a character's attack.
    * 
    * @function onEnemyAttackCollision
    * @memberof GameWorld
    * @param {Attack} attack - The attack object that is colliding with the enemy. Can be a normal or heavy attack.
    * @param {number} i - The index of the attack in the `attacks` array.
    * @param {Enemy} enemy - The enemy object that is being hit by the attack.
    * @returns {void} This method does not return a value.
    */
    onEnemyAttackCollision(attack, i, enemy) {
        if (attack instanceof NormalAttack) {
            enemy.hit(attack.initiator.damageNormalAttack);
        } else {
            enemy.hit(attack.initiator.damageHeavyAttack);
        }
        this.overlay.setEnergy(this.character.energy);
        this.attacks.splice(i, 1);
    }


    /**
    * Checks if an enemy is killed by an attack and handles the necessary updates.
    * 
    * @function ifAttackEnemyKilled
    * @memberof GameWorld
    * @param {Enemy} enemy - The enemy object that is being checked for death.
    * @param {number} index - The index of the enemy in the `level.enemies` array.
    * @returns {void} This method does not return a value.
    */
    ifAttackEnemyKilled(enemy, index) {
        if (enemy instanceof EndBoss) {
            this.overlay.setBossHp(this.level.enemies[this.level.enemies.length - 1].health);
        }
        if (enemy.health <= 0 && enemy instanceof Enemies) {
            this.level.enemies.splice(index, 1);
            this.deadEnemies.push(enemy);
        }
    }


    /**
    * Handles the collision of a player attack with the character and updates health accordingly.
    * 
    * @function onPlayerAttackCollision
    * @memberof GameWorld
    * @param {Attack} attack - The attack object that is being checked for a collision with the character.
    * @param {number} i - The index of the attack in the `attacks` array.
    * @returns {void} This method does not return a value.
    */
    onPlayerAttackCollision(attack, i) {
        if (this.character.isColliding(attack)) {
            this.character.hit(attack.initiator.damageNormalAttack);
            this.overlay.setHealth(this.character.health);
            this.attacks.splice(i, 1);
        } else {
            if (!this.character.isColliding(attack)) {
                this.attacks.splice(i, 1);
            }
        }
    }


    /**
    * Handles the movement and animation of background and foreground objects when the player is moving.
    * 
    * @function backgroundMoving
    * @memberof GameWorld
    * @returns {void} This method does not return a value.
    */
    backgroundMoving() {
        if (this.character.playerMoving) {
            this.level.backgroundObject.forEach(bgObj => {
                if (bgObj.isMoving) {
                    bgObj.animate(this.character.otherDirection);
                }
            });
            this.level.foregroundObject.forEach(bgObj => {
                if (bgObj.isMoving) {
                    bgObj.animate(this.character.otherDirection);
                }
            });
        }
    }


    /**
    * Clears the canvas and redraws all objects for the next frame in the game.
    * 
    * @function draw
    * @memberof GameWorld
    * @returns {void} This method does not return a value.
    */
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.drawMovableObjects();
        this.ctx.translate(-this.camera_x, 0);
        this.drawFixedObjects();
        this.ctx.translate(this.camera_x, 0);
        this.ctx.translate(-this.camera_x, 0);
        let self = this;
        requestAnimationFrame(() => {
            self.draw()
        });
    }


    /**
    * Draws all movable objects in the game world.
    * 
    * @function drawMovableObjects
    * @memberof GameWorld
    * @returns {void} This method does not return a value.
    */
    drawMovableObjects() {
        this.executeLoops(this.level.backgroundObject);
        this.executeLoops(this.level.clouds);
        this.addToMap(this.character);
        this.executeLoops(this.level.collectableArrow);
        this.executeLoops(this.level.collectableCoin);
        this.executeLoops(this.level.enemies);
        this.executeLoops(this.throwableObj);
        this.executeLoops(this.attacks);
        this.executeLoops(this.collidedThrowObj);
        this.executeLoops(this.deadEnemies);
        this.executeLoops(this.level.foregroundObject);
    }


    /**
    * Draws all fixed objects in the game world.
    * 
    * @function drawFixedObjects
    * @memberof GameWorld
    * @returns {void} This method does not return a value.
    */
    drawFixedObjects() {
        this.executeLoops(this.overlay.healthbar);
        this.executeLoops(this.overlay.energybar);
        this.addToMap(this.overlay.arrows);
        this.addToMap(this.overlay.coins);
        if (this.bossSpoted) {
            this.executeLoops(this.overlay.bosshpbar);
        }
    }


    /**
    * Iterates through an array of objects and adds them to the map.
    * 
    * @function executeLoops
    * @memberof GameWorld
    * @param {Array} array - The array of objects to be iterated over.
    * @returns {void} This method does not return a value.
    */
    executeLoops(array) {
        array.forEach(object => {
            this.addToMap(object);
        });
    }


    /**
    * Draws an object onto the canvas, with optional adjustments for its direction.
    * 
    * @function addToMap
    * @memberof GameWorld
    * @param {Object} object - The object to be drawn onto the map (e.g., character, enemy, collectible).
    * @returns {void} This method does not return a value.
    */
    addToMap(object) {
        if (object.otherDirection) {
            this.flipImage(object);
        }

        object.draw(this.ctx);
        // object.drawFrame(this.ctx);
        // object.drawHitbox(this.ctx);
        // object.drawAttentionArea(this.ctx);

        if (object.otherDirection) {
            this.flipImageBack(object);
        }
    }


    /**
    * Flips the provided object horizontally on the canvas.
    * 
    * @function flipImage
    * @memberof GameWorld
    * @param {Object} object - The object to be flipped horizontally. This should include properties 
    *                           like `x`, `width`, and `hitboxX` to handle the transformation properly.
    * @returns {void} This method does not return a value.
    */
    flipImage(object) { // Spiegelt das einzufügende Objekt
        this.ctx.save();
        this.ctx.translate(object.width, 0); // Spiegelt alle Objekte die eingefügt werden, um 180 Grad
        this.ctx.scale(-1, 1); // Verschiebt das eingefügte Objet, um seine eigene Breite
        object.x = object.x * -1; // Spiegelt die x-Koordinate damit es an der richtigen Stelle gezeichnet wird
        object.hitboxX = object.hitboxX * -1;
    }


    /**
    * Restores the object to its original orientation after being flipped.
    * 
    * @function flipImageBack
    * @memberof GameWorld
    * @param {Object} object - The object whose flip transformation should be undone. 
    *                           This should include properties like `x` and `hitboxX`.
    * @returns {void} This method does not return a value.
    */
    flipImageBack(object) {
        object.x = object.x * -1;
        object.hitboxX = object.hitboxX * -1;
        this.ctx.restore();
    }
}