class Counter extends MovableObject {
    width;
    height;
    x;
    y;
    counter = 0;
    text = true;
    textX;
    textY;
    textContent = this.counter + 'x';

    constructor(imagePath, x, y, width, height, textX, textY) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.textX = textX;
        this.textY = textY;
    }


    /**
    * Updates the counter based on the provided input and updates the display text.
    * 
    * @function setCount
    * @memberof YourClassName
    * @param {string} set - The action to perform on the counter; '-' to decrement, '+' to increment.
    * @returns {void}
    */
    setCount(set) {
        if (set == '-') {
            this.counter--;
        }
        if (set == '+') {
            this.counter++;
        }
        this.textContent = this.counter + 'x';
    }
}