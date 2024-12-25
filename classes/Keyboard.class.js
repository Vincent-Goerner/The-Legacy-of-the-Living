class Keyboard {
    LEFT = false; // 65
    RIGHT = false; // 68
    SPACE = false; // 32
    ATTACK = false; // 69
    THROW = false; // 70
    DASH = false; // 16
    HEAVY = false; // 81

    constructor() {
        this.bindControlEvents();
        this.mobileControlPressEvents();
    }


    /**
    * Sets up touch event listeners for mobile controls.
    * 
    * @function mobileControlPressEvents
    * @memberof YourClassName
    * @returns {void}
    */
    mobileControlPressEvents() {
        document.getElementById('mobile-left').addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.LEFT = true;
        });
        document.getElementById('mobile-left').addEventListener('touchend', (e) => {
            e.preventDefault();
            this.LEFT = false;
        });
        document.getElementById('mobile-right').addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.RIGHT = true;
        });
        document.getElementById('mobile-right').addEventListener('touchend', (e) => {
            e.preventDefault();
            this.RIGHT = false;
        });
        document.getElementById('mobile-jump').addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.SPACE = true;
        });
        document.getElementById('mobile-jump').addEventListener('touchend', (e) => {
            e.preventDefault();
            this.SPACE = false;
        });
        document.getElementById('mobile-attack').addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.ATTACK = true;
        });
        document.getElementById('mobile-attack').addEventListener('touchend', (e) => {
            e.preventDefault();
            this.ATTACK = false;
        });
        document.getElementById('mobile-heavy').addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.HEAVY = true;
        });
        document.getElementById('mobile-heavy').addEventListener('touchend', (e) => {
            e.preventDefault();
            this.HEAVY = false;
        });
        document.getElementById('mobile-special').addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.THROW = true;
        });
        document.getElementById('mobile-special').addEventListener('touchend', (e) => {
            e.preventDefault();
            this.THROW = false;
        });
    }


    /**
    * Binds keydown and keyup events to control character actions.
    * 
    * Key mappings:
    * - `A` (keyCode 65) -> Move left (`LEFT`)
    * - `D` (keyCode 68) -> Move right (`RIGHT`)
    * - `Space` (keyCode 32) -> Jump (`SPACE`)
    * - `E` (keyCode 69) -> Attack (`ATTACK`)
    * - `Q` (keyCode 81) -> Heavy attack (`HEAVY`)
    * - `F` (keyCode 70) -> Special attack (`THROW`)
    * - `Shift` (keyCode 16) -> Dash (`DASH`)
    * 
    * @function bindControlEvents
    * @memberof YourClassName
    * @returns {void}
    */
    bindControlEvents() {
        window.addEventListener('keydown', (e) => {
            if (e.keyCode == 65) {
                this.LEFT = true;
            }
            if (e.keyCode == 68) {
                this.RIGHT = true;
            }
            if (e.keyCode == 32) {
                this.SPACE = true;
            }
            if (e.keyCode == 69) {
                this.ATTACK = true;
            }
            if (e.keyCode == 81) {
                this.HEAVY = true;
            }
            if (e.keyCode == 70) {
                this.THROW = true;
            }
            if (e.keyCode == 16) {
                this.DASH = true;
            }
        });
        document.addEventListener('keyup', (e) => {
            if (e.keyCode == 65) {
                this.LEFT = false;
            }
            if (e.keyCode == 68) {
                this.RIGHT = false;
            }
            if (e.keyCode == 32) {
                this.SPACE = false;
            }
            if (e.keyCode == 69) {
                this.ATTACK = false;
            }
            if (e.keyCode == 81) {
                this.HEAVY = false;
            }
            if (e.keyCode == 70) {
                this.THROW = false;
            }
            if (e.keyCode == 16) {
                this.DASH = false;
            }
        });
    }
}