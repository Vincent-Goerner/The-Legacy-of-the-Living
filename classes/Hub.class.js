class Hub extends MovableObject {
    healthbar;
    energybar;
    arrows;
    coins;
    bosshpbar;

    constructor(healthbar, energybar, arrows, coins, bosshpbar) {
        super()
        this.healthbar = healthbar;
        this.energybar = energybar;
        this.arrows = arrows;
        this.coins = coins;
        this.bosshpbar = bosshpbar;
    }


    /**
    * Updates the boss's health bar based on the given health points.
    * 
    * @function setBossHp
    * @memberof YourClassName
    * @param {number} hp - The current health points of the boss.
    * @returns {void}
    */
    setBossHp(hp) {
        this.bosshpbar.forEach((obj, i) => {     
            if (i > hp - 1) {
                obj.loadImage('./assets/pixel_art/gui-for-cyberpunk-pixel-art/2 Bars/HealthBar5.png');
            }
        });
    }


    /**
    * Sets the player's health and updates the health bar accordingly.
    * 
    * @function setHealth
    * @memberof YourClassName
    * @param {number} hp - The current health points to set for the player.
    * @returns {void}
    */
    setHealth(hp) {
        this.health = hp;

        this.healthbar.forEach((obj, i) => {     
            if (i > hp - 1) {
                obj.loadImage('./assets/pixel_art/gui-for-cyberpunk-pixel-art/2 Bars/HealthBar5.png');
            }
        });
    }


    /**
    * Sets the player's energy and updates the energy bar accordingly.
    * 
    * @function setEnergy
    * @memberof YourClassName
    * @param {number} energy - The current energy points to set for the player.
    * @returns {void}
    */
    setEnergy(energy) {
        this.energy = energy;
        
        this.energybar.forEach((obj, i) => {     
            if (i > energy - 1) {
                obj.loadImage('./assets/pixel_art/gui-for-cyberpunk-pixel-art/2 Bars/EnergyBar5.png');
            }
        });
    }


    /**
    * Sets the player's health bar to full health.
    * 
    * @function setFullHealth
    * @memberof YourClassName
    * @returns {void}
    */
    setFullHealth() {
        this.healthbar.forEach((obj, i) => {
            obj.loadImage('./assets/pixel_art/gui-for-cyberpunk-pixel-art/2 Bars/HealthBar1.png');
        });
    }


    /**
    * Regenerates the player's health by updating the health bar.
    * 
    * @function regenerateHealth
    * @memberof YourClassName
    * @param {number} hp - The current health points to regenerate and display in the health bar.
    * @returns {void}
    */
    regenerateHealth(hp) {
        this.healthbar.forEach((obj, i) => {     
            if (i < hp) {
                obj.loadImage('./assets/pixel_art/gui-for-cyberpunk-pixel-art/2 Bars/HealthBar1.png');
            }
        });
    }
    

    /**
    * Regenerates the player's energy by updating the energy bar.
    * 
    * @function regenerateEnergy
    * @memberof YourClassName
    * @param {number} energy - The current energy points to regenerate and display in the energy bar.
    * @returns {void}
    */
    regenerateEnergy(energy) {
        this.energybar.forEach((obj, i) => {     
            if (i < energy) {
                obj.loadImage('./assets/pixel_art/gui-for-cyberpunk-pixel-art/2 Bars/EnergyBar1.png');
            }
        });
    }
}