class DrawableObjects {
    x = 50;
    y = 240;
    width = 180;
    height = 180;

    img;
    imageCache = {};
    currentImage = 0;
    firstLoad = false;

    health = 100;
    energy = 5;


    constructor() {
    }


    /**
    * Loads an image from the specified path and assigns it to the `img` property.
    * 
    * @function loadImage
    * @memberof YourClassName
    * @param {string} path - The path to the image file to be loaded.
    * @returns {void}
    */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }


    /**
    * Loads multiple images from the specified paths and caches them.
    * 
    * @function loadImages
    * @memberof YourClassName
    * @param {string[]} arr - An array of image paths to be loaded and cached.
    * @returns {void}
    */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image;
            img.src = path;
            this.imageCache[path] = img;
        });
    }


    /**
    * Draws the image and optional text onto the canvas.
    * 
    * @function draw
    * @memberof YourClassName
    * @param {CanvasRenderingContext2D} ctx - The 2D rendering context of the canvas to draw on.
    * @returns {void}
    */
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        if (this.text) {
            ctx.font = "20px Pixelify Sans";
            ctx.fillText(this.textContent, this.textX, this.textY);
        }
    }


    /**
    * Draws a blue rectangle around the object to represent its frame.
    * 
    * @function drawFrame
    * @memberof YourClassName
    * @param {CanvasRenderingContext2D} ctx - The 2D rendering context of the canvas to draw on.
    * @returns {void}
    */
    drawFrame(ctx) { // Zeichnet ein blaues Rechteck um jedes Objekt
        if (this instanceof Samurai || this instanceof Archer || this instanceof Enemies || this instanceof EndBoss || this instanceof ThrowableObject || this instanceof CollectableArrow || this instanceof CollectableCoin || this instanceof NormalAttack || this instanceof HeavyAttack) {
            ctx.beginPath();
            ctx.lineWidth = "2";
            ctx.strokeStyle = "blue";
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }


    /**
    * Draws a red rectangle around the object's hitbox.
    * 
    * @function drawHitbox
    * @memberof YourClassName
    * @param {CanvasRenderingContext2D} ctx - The 2D rendering context of the canvas to draw on.
    * @returns {void}
    */
    drawHitbox(ctx) { // Zeichnet ein rotes Rechteck, dass die tatsächliche Hitbox des Objekts darstellt
        if (this instanceof Samurai || this instanceof Archer || this instanceof Enemies || this instanceof EndBoss || this instanceof ThrowableObject || this instanceof CollectableArrow || this instanceof CollectableCoin || this instanceof NormalAttack || this instanceof HeavyAttack) {
            ctx.beginPath();
            ctx.lineWidth = "3";
            ctx.strokeStyle = "red";
            ctx.rect(this.hitboxX, this.hitboxY, this.hitboxWidth, this.hitboxHeight);
            ctx.stroke();
        }
    }


    /**
    * Draws a yellow rectangle around the object's attention area.
    * 
    * @function drawAttentionArea
    * @memberof YourClassName
    * @param {CanvasRenderingContext2D} ctx - The 2D rendering context of the canvas to draw on.
    * @returns {void}
    */
    drawAttentionArea(ctx) { // Zeichnet ein gelbes Rechteck, dass die Attation Range des Objekts darstellt
        if (this instanceof Enemies || this instanceof EndBoss) {
            ctx.beginPath();
            ctx.lineWidth = "1";
            ctx.strokeStyle = "yellow";
            ctx.rect(this.x - this.attentionOffset, this.attentionY, this.attentionWidth, this.attentionHeight);
            ctx.stroke();
        }
    }
}