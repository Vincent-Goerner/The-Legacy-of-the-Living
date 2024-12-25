class NormalAttack extends MovableObject {
    width = 50;
    height = 70;
    x;
    y;
    initiator;

    hitboxWidth = 50;
    hitboxHeight = 70;
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