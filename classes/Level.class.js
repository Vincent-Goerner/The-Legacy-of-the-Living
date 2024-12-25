class Level {
    enemies;
    clouds;
    backgroundObject;
    foregroundObject;
    collectableArrow;
    collectableCoin;

    constructor(enemies, clouds, backgroundObject, foregroundObject, collectableArrow, collectableCoin) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObject = backgroundObject;
        this.foregroundObject = foregroundObject;
        this.collectableArrow = collectableArrow;
        this.collectableCoin = collectableCoin;
    }
}