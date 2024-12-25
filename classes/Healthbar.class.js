class Healthbar extends DrawableObjects {
    width = 3;
    height = 10;

    constructor(imagePath, x, y) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = y;
    }
}    