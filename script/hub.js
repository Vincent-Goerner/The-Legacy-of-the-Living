let hub;


/**
 * Initializes the hub UI, including health, energy bars, counters, and boss health.
 * Sets up health and energy bars for the player and boss, as well as counters for arrows and coins.
 *
 * @function
 */
function createHub() {
    let health = [];
    let x = 80;
    let y = 20;
    let bossHealth = [];
    let bosshpX = 650;

    for (let i = 0; i < 100; i++) {
        health.push(new Healthbar('./assets/pixel_art/gui-for-cyberpunk-pixel-art/2 Bars/HealthBar1.png', x, y));
        x += 2;
    }
    for (let i = 0; i < 200; i++) {
        if (i == 100) {
            y = 40;
            bosshpX = 650;
        }
        bossHealth.push(new Healthbar('./assets/pixel_art/gui-for-cyberpunk-pixel-art/2 Bars/HealthBar1.png', bosshpX, y));
        bosshpX -= 2;
    }
    hub = new Hub(
        health,
        [
            new Energybar('./assets/pixel_art/gui-for-cyberpunk-pixel-art/2 Bars/EnergyBar1.png', 80),
            new Energybar('./assets/pixel_art/gui-for-cyberpunk-pixel-art/2 Bars/EnergyBar1.png', 110),
            new Energybar('./assets/pixel_art/gui-for-cyberpunk-pixel-art/2 Bars/EnergyBar1.png', 140),
            new Energybar('./assets/pixel_art/gui-for-cyberpunk-pixel-art/2 Bars/EnergyBar1.png', 170),
            new Energybar('./assets/pixel_art/gui-for-cyberpunk-pixel-art/2 Bars/EnergyBar1.png', 200)
        ],
        new Counter('./assets/pixel_art/samurai-pixel-art-sprite-sheets/Samurai_Archer/arrow.png', 110, 40, 60, 40, 80, 65),
        new Counter('./assets/pixel_art/swamp-game-tileset-pixel-art/4 Animated objects/Coin_1.png', 115, 65, 25, 25, 80, 85),
        bossHealth,
    );
}