class HeavyAttack extends MovableObject {
    width = 70;
    height = 30;
    x;
    y;
    initiator;

    hitboxWidth = 70;
    hitboxHeight = 30;
    hitboxX;
    hitboxY;

    constructor(x, y, initiator) {
        super().loadImage('');
        this.x = x;
        this.y = y;
        this.hitboxX = x;
        this.hitboxY = y;
        this.initiator = initiator;
    }
}