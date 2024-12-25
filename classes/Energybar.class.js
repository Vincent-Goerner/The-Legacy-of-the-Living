class Energybar extends DrawableObjects {
    width = 30;
    height = 10;
    y = 35;

    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.x = x;
    }
}