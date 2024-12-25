let canvas;
let world;
let keyboard;
let intervalID = [];
let audioElements = [];
let menuAudio = {};
let isMuted = false;
let gameStarted = false;
let gamePaused = false;
let menuMusic = true;


/**
 * Initializes the game by loading menu and game audio, then rendering the screen.
 *
 * @function
 */
function init() {
    loadMenuAudio();
    loadGameAudio();
    render();
}


/**
 * Initializes the game by setting the game state and loading key components, 
 * including controls, hub, level 1, and overlays.
 *
 * @function
 */
function initGame() {
    gameStarted = true;
    loadControls();
    createHub();
    createLevel1();
    loadOverlay();
}


/**
 * Starts the game by initializing game components such as keyboard input, world, and canvas.
 * It also controls game flow by continuing the game, toggling the main menu, and enabling the overlay.
 *
 * @function
 */
function startGame() {
    menuMusic = false;
    keyboard = new Keyboard();
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);

    continueGame();
    toggleMainMenu();
    toggleOverlay();
}


/**
 * Ends the game by stopping the game interval and setting the game state to not started.
 *
 * @function
 */
function endingGame() {
    gameStarted = false;

    stopIntervall();
}


/**
 * Plays the victory music when the player wins, and pauses it if the game starts or menu music is active.
 *
 * @function
 */
function playWinMusic() {
    let sound = menuAudio['./assets/audio/victory.mp3'];
    sound.play();
    setInterval(() => {
        if (menuMusic || gameStarted) {
            sound.pause();
        }
    }, 100);
}


/**
 * Plays the menu theme music if the menu music is enabled, and pauses it when disabled.
 * The music is played or paused at regular intervals based on the `menuMusic` state.
 *
 * @function
 */
function playMenuTheme() {
    let sound = menuAudio['./assets/audio/menu_theme_2.mp3'];
    setInterval(() => {
        if (!sound.play() && menuMusic) {
            sound.play();
        }
        if (!menuMusic) {
            sound.pause();
        }
    }, 500);
}


/**
 * Plays the button click sound when a button is pressed.
 *
 * @function
 */
function playButtonSound() {
    let sound = menuAudio['./assets/audio/click_button_2.mp3'];
    sound.play();
}


/**
 * Plays the sound effect when the return button is pressed.
 *
 * @function
 */
function playReturnSound() {
    let sound = menuAudio['./assets/audio/return_button.mp3'];
    sound.play();
}


/**
 * Plays a sound effect depending on the game's pause state.
 * If the game is not paused, the pause sound is played; 
 * if the game is paused, the unpause sound is played.
 *
 * @function
 */
function playPauseSound() {
    let sound;
    if (!gamePaused) {
        sound = menuAudio['./assets/audio/pause_game.mp3'];
    } else {
        sound = menuAudio['./assets/audio/unpause_game.mp3'];
    }
    sound.play();
}


/**
 * Creates a new audio element from the provided source, adds it to the `audioElements` array,
 * and returns the created audio element.
 *
 * @param {string} src - The source URL of the audio file to be played.
 * @returns {HTMLAudioElement} The created audio element.
 *
 * @function
 */
function setMutableAudio(src) {
    const audio = new Audio(src);
    audioElements.push(audio);
    return audio;
}


/**
 * Toggles the sound icon based on the mute state.
 *
 * @function
 */
function switchSoundIconOption() {
    if (!isMuted) {
        document.getElementById('sound-option').innerHTML = `<img src="./assets/img/full_volume.png">`;
    } else {
        document.getElementById('sound-option').innerHTML = `<img src="./assets/img/mute.png">`;
    }
}


/**
 * Toggles the sound icon in the game menu based on the mute state.
 *
 * @function
 */
function switchSoundIconGameMenu() {
    if (!isMuted) {
        document.getElementById('sound-option-game-menu').innerHTML = `<img src="./assets/img/full_volume.png">`;
    } else {
        document.getElementById('sound-option-game-menu').innerHTML = `<img src="./assets/img/mute.png">`;
    }
}


/**
 * Toggles the mute state for all audio elements.
 *
 * @function
 */
function toggleAudio() {
    isMuted = !isMuted;
    audioElements.forEach(audio => {
        audio.muted = isMuted;
    });
}


/**
 * Resumes the game by unpausing it.
 *
 * @function
 */
function continueGame() {
    gamePaused = false;
}


function toggleMainMenu() {
    document.getElementById('main-menu').classList.toggle('d-none');
}


/**
 * Toggles the visibility of the main menu.
 *
 * @function
 */
function toggleGameOverlay() {
    document.getElementById('game-overlay').classList.toggle('d-none');
}


/**
 * Toggles the visibility of the overlay.
 *
 * @function
 */
function toggleOverlay() {
    document.getElementById('overlay').classList.toggle('d-none');
}


/**
 * Requests fullscreen mode for the screen container.
 *
 * @function
 */
function fullscreen() {
    document.getElementById('screen-div').requestFullscreen();
}


/**
 * Disables a button for 2 seconds before enabling it again.
 * 
 * @param {string} id - The ID of the button element to be delayed.
 */
function delayBtnUse(id) {
    setTimeout(() => {
        document.getElementById(id).disabled = false;
    }, 1500);
}


/**
 * Sets a stoppable interval and stores its ID.
 *
 * @param {function} fn - The function to execute at each interval.
 * @param {number} time - The time interval in milliseconds.
 * @function
 */
function setStoppableIntervall(fn, time) {
    let id = setInterval(fn, time);
    intervalID.push(id);
}


/**
 * Stops all active intervals after a brief delay.
 *
 * @function
 */
function stopIntervall() {
    setTimeout(() => {
        intervalID.forEach(clearInterval);
    }, 500);
}


/**
 * Togggle the visibility of mobile controls.
 *
 * @function
 */
function toggleMobileControls() {
    if (screenSize() == 'mobile' && gameStarted) {
        document.getElementById('mobile-controls').classList.remove('d-none');
    } else {
        if (screenSize() == 'desktop' && gameStarted) {
            document.getElementById('mobile-controls').classList.add('d-none');
        }
    }
}


/**
 * Returns the screen type based on window size ('mobile' or 'desktop').
 *
 * @returns {string} 'mobile' or 'desktop'
 * @function
 */
function screenSize() {
    return (window.innerWidth < 770 || window.innerHeight < 500) ? 'mobile' : 'desktop';
}


/**
 * Displays a prompt to turn the device if the screen is mobile and in portrait mode.
 * Toggles mobile controls and responsiveness.
 *
 * @function
 */
function turnDevice() {
    let screenType = screenSize();
    if (screenType == 'mobile' && window.innerWidth < innerHeight) {
        document.getElementById('turn-device').classList.remove('d-none');
        loadMobileResponsiv();
    } else {
        document.getElementById('turn-device').classList.add('d-none');
    }
    setInterval(() => {
        toggleMobileControls();
    }, 1000/60);
}