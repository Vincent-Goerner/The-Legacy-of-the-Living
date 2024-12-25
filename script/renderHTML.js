/**
 * Renders the main HTML structure for the game, including the canvas, main menu, overlays, and device orientation message.
 * It also calls `loadInfoScreen` to initialize additional UI elements.
 *
 * @function
 */
function render() {
    document.getElementById('screen-div').innerHTML += /*html*/`
        <canvas id="canvas" width="720" height="480"></canvas>
    `;
    document.getElementById('screen-div').innerHTML += /*html*/`
        <div id="main-menu" class="main-menu"></div>
    `;
    document.getElementById('screen-div').innerHTML += /*html*/`
        <div id="game-overlay" class="game-over screen-bg d-none"></div>
    `;
    document.getElementById('screen-div').innerHTML += /*html*/`
        <div id="overlay" class="overlay d-none"></div>
    `;
    document.getElementById('screen-div').innerHTML += /*html*/`
        <div id="turn-device" class="turn-device d-none"></div>
    `;

    loadInfoScreen();
}


/**
 * Loads the informational screen displayed when the game starts, including a message about the alpha version and a "Continue" button.
 * The button triggers the `loadMainMenu` function and plays a button sound.
 *
 * @function
 */
function loadInfoScreen() {
    document.getElementById('main-menu').innerHTML = '';
    document.getElementById('main-menu').innerHTML += /*html*/`
        <div class="info-bg">
            <div class="alpha-info">
                Hello adventurer, <br>
                this is an alpha version of the game, we ask for your understanding. <br>
                <br>
                Thanks for playing the game.
            </div>
            <button class="primary" onclick="loadMainMenu(), playButtonSound()">Continue</button>
        </div>
    `;
}


/**
 * Loads the main menu with a title and three buttons: Start, Option, and Info.
 * Starts background music and calls `playMenuTheme`.
 */
function loadMainMenu() {
    menuMusic = true;

    document.getElementById('main-menu').innerHTML = '';
    document.getElementById('main-menu').innerHTML += /*html*/`
        <div class="headline screen-bg">
            <h1>The Legacy of the Living</h1>
        </div>
        <div class="btn-div screen-bg">
            <button class="primary" onclick="initGame(), playButtonSound()">Start</button>
            <button class="secondary" onclick="loadOption(), playButtonSound()">Option</button>
            <button class="secondary" onclick="loadImpressum(), playButtonSound()">i</button>
        </div>
    `;
    playMenuTheme();
}


/**
 * Loads the options menu with buttons for "Controls" and "Audio".
 * Plays the menu theme and allows navigation back to the main menu.
 */
function loadOption() {
    playMenuTheme();
    document.getElementById('main-menu').innerHTML = '';
    document.getElementById('main-menu').innerHTML += /*html*/`
        <div class="screen-bg return-btn">
            <button class="return" onclick="loadMainMenu(), playReturnSound()"><</button>
        </div>
        <div class="headline screen-bg">
            <h1>Option</h1>
        </div>
        <div class="btn-div screen-bg">
            <button class="secondary" onclick="loadControls(), playButtonSound()">Controls</button>
            <button class="secondary" onclick="loadAudioOption(), playButtonSound()">Audio</button>
        </div>
    `;
}


/**
 * Loads the controls menu, showing the control schemes for movement and combat.
 * If the game has started, displays a "Continue" button, otherwise a "Return" button.
 * Displays key mappings for movement (A/D, Space) and combat (E, Q, F).
 */
function loadControls() {
    playMenuTheme();
    document.getElementById('main-menu').innerHTML = '';
    if (!gameStarted) {
        document.getElementById('main-menu').innerHTML += /*html*/`
            <div class="screen-bg return-btn">
                <button class="return" onclick="loadOption(), playReturnSound()"><</button>
            </div>
        `;
    } else {
        document.getElementById('main-menu').innerHTML += /*html*/`
            <div class="screen-bg continue-btn">
                <button class="return" onclick="loadTutorial(), playButtonSound()">Continue</button>
            </div>
        `;
    }
    document.getElementById('main-menu').innerHTML += /*html*/`
        <div class="headline screen-bg">
            <h1>Controls</h1>
        </div>
        <div class="controls-div">
            <div>
                <div class="screen-bg subheadline">
                    <h2>Movement</h2>
                </div>
                <div class="key-overview">
                    <div class="key-div">        
                        Left
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 100 100">
                            <rect x="5" y="5" width="90" height="90" rx="15" ry="15" fill="#b0b0b0" stroke="#808080" stroke-width="2"/>
                            <text x="50" y="55" font-family="Pixelify Sans" font-size="30" fill="white" text-anchor="middle" alignment-baseline="middle">
                              A
                            </text>
                        </svg>
                    </div>
                    <div class="key-div">        
                        Right
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 100 100">
                            <rect x="5" y="5" width="90" height="90" rx="15" ry="15" fill="#b0b0b0" stroke="#808080" stroke-width="2"/>
                            <text x="50" y="55" font-family="Pixelify Sans" font-size="30" fill="white" text-anchor="middle" alignment-baseline="middle">
                              D
                            </text>
                        </svg>
                    </div>
                    <div class="key-div">        
                        Jump
                        <svg xmlns="http://www.w3.org/2000/svg" width="130" height="50" viewBox="0 0 100 100">
                            <rect x="-10" y="5" width="130" height="90" rx="15" ry="15" fill="#b0b0b0" stroke="#808080" stroke-width="2"/>
                            <text x="50" y="55" font-family="Pixelify Sans" font-size="30" fill="white" text-anchor="middle" alignment-baseline="middle">
                              Space
                            </text>
                        </svg>
                    </div>
                </div>
            </div>

            <div>
                <div class="screen-bg subheadline">
                    <h2>Combat</h2>
                </div>
                <div class="key-overview">
                    <div class="key-div">        
                        Attack
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 100 100">
                            <rect x="5" y="5" width="90" height="90" rx="15" ry="15" fill="#b0b0b0" stroke="#808080" stroke-width="2"/>
                            <text x="50" y="55" font-family="Pixelify Sans" font-size="30" fill="white" text-anchor="middle" alignment-baseline="middle">
                              E
                            </text>
                        </svg>
                    </div>
                    <div class="key-div">        
                        Heavy Attack
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 100 100">
                            <rect x="5" y="5" width="90" height="90" rx="15" ry="15" fill="#b0b0b0" stroke="#808080" stroke-width="2"/>
                            <text x="50" y="55" font-family="Pixelify Sans" font-size="30" fill="white" text-anchor="middle" alignment-baseline="middle">
                              Q
                            </text>
                        </svg>
                    </div>
                    <div class="key-div">        
                        Special Attack
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 100 100">
                            <rect x="5" y="5" width="90" height="90" rx="15" ry="15" fill="#b0b0b0" stroke="#808080" stroke-width="2"/>
                            <text x="50" y="55" font-family="Pixelify Sans" font-size="30" fill="white" text-anchor="middle" alignment-baseline="middle">
                              F
                            </text>
                        </svg>
                    </div>
                </div>
            </div>  
        </div>
    `;
}


/**
 * Loads the audio settings menu, allowing the user to toggle audio on/off.
 * Displays a "Return" button to go back to the options menu.
 * Displays a button to mute/unmute the game sound with an appropriate icon.
 */
function loadAudioOption() {
    playMenuTheme();
    document.getElementById('main-menu').innerHTML = '';
    document.getElementById('main-menu').innerHTML += /*html*/`
        <div class="screen-bg return-btn">
            <button class="return" onclick="loadOption(), playReturnSound()"><</button>
        </div>
        <div class="headline screen-bg">
            <h1>Audio</h1>
        </div>
        <div class="btn-div screen-bg">
            <button id="sound-option" class="secondary sound-option" onclick="toggleAudio(), switchSoundIconOption(), playButtonSound()"><img src="./assets/img/full_volume.png"></button>
        </div>
    `;
    switchSoundIconOption();
}


/**
 * Loads the tutorial screen with information about the game's mechanics.
 * Displays hints about health, energy, arrows, and coins, as well as an image.
 * Includes a button to continue to the next tutorial section.
 */
function loadTutorial() {
    document.getElementById('main-menu').innerHTML = '';
    document.getElementById('main-menu').innerHTML += /*html*/`
        <div class="screen-bg continue-btn">
            <button id="next-tutorial-btn" class="return" onclick="loadTutorialEnd(), playButtonSound()" disabled>Continue</button>
        </div>
        <div class="tutorial-headline screen-bg">
            <h1>Tutorial</h1>
        </div>
        <div class="screen-bg tutorial-hints">
            Your character got different indicators. <br>
            If the health fall below 0, your charcter die. <br>
            The energy is needed to carry out melee attacks. <br>
            Is there to low or empty, you cant melee attack. So watch out for it! <br>
            Arrows are need for the special attack. <br>
            At last we've got coins. Try to collect all in the level, there are 40.
        </div>
        <div class="screen-bg">
            <img class="tutorial-img" src="./assets/img/tutorial_hub_1.PNG">
        </div>
    `;
    delayBtnUse('next-tutorial-btn');
}


/**
 * Loads the final tutorial screen with information about enemy behavior.
 * Explains the enemy's detection range and how they attack when approached.
 * Displays two images illustrating enemy behavior and a button to start the game.
 */
function loadTutorialEnd() {
    document.getElementById('main-menu').innerHTML = '';
    document.getElementById('main-menu').innerHTML += /*html*/`
        <div class="screen-bg continue-btn">
            <button id="game-start-btn" class="return" onclick="startGame(), playButtonSound()" disabled>Continue</button>
        </div>
        <div class="tutorial-headline screen-bg">
            <h1>Tutorial</h1>
        </div>
        <div class="screen-bg tutorial-hints">
            The enemys got an invisible area, if the character enter it, <br>
            the enemy move to your position and attack in range.
        </div>
        <div class="screen-bg">
            <img class="tutorial-img" src="./assets/img/tutorial_enemy.PNG">
        </div>
        <div class="screen-bg">
            <img class="tutorial-img" src="./assets/img/tutorial_enemy_attention.PNG">
        </div>
    `;
    delayBtnUse('game-start-btn');
}


/**
 * Loads the game overlay with menu options, fullscreen button, and mobile controls.
 * Includes buttons for menu, fullscreen, and mobile-specific controls (hidden by default).
 */
function loadOverlay() {
    document.getElementById('overlay').innerHTML = '';
    document.getElementById('overlay').innerHTML += /*html*/`
        <img class="game-menu" src="./assets/img/menu.png" onclick="loadGameMenu(), toggleOverlay(), toggleGameOverlay(), playPauseSound()">
        <img class="game-fullscreen" src="./assets/img/fullscreen.svg" onclick="fullscreen()">
        <div id="mobile-controls" class="d-none">
            <button id="mobile-left" class="mobile-controls mobile-left"><</button>
            <button id="mobile-right" class="mobile-controls mobile-right">></button>
            <button id="mobile-jump" class="mobile-controls mobile-jump">J</button>
            <button id="mobile-attack" class="mobile-controls mobile-attack">A</button>
            <button id="mobile-heavy" class="mobile-controls mobile-heavy-attack">H</button>
            <button id="mobile-special" class="mobile-controls mobile-special-attack">S</button>
        </div>
    `;
}


/**
 * Displays the game menu with options to resume, go to the main menu, and toggle sound.
 * Pauses the game and shows the game overlay.
 */
function loadGameMenu() {
    gamePaused = true;
    document.getElementById('game-overlay').innerHTML = '';
    document.getElementById('game-overlay').innerHTML += /*html*/`
        <div class="headline screen-bg">
            <h1>Game Menu</h1>
        </div>
        <div class="btn-div screen-bg">
        <button class="primary" onclick="toggleOverlay(), toggleGameOverlay(), continueGame(), playPauseSound()">Resume</button>
        <button class="secondary" onclick="loadMainMenu(), toggleMainMenu(), toggleGameOverlay(), endingGame(), playButtonSound()">Main Menu</button>
        <button id="sound-option-game-menu" class="secondary sound-option" onclick="toggleAudio(), switchSoundIconGameMenu(), playButtonSound()"><img src="./assets/img/full_volume.png"></button>
        </div>
    `;
    switchSoundIconGameMenu();
}


/**
 * Displays the game over screen with options to restart the game or return to the main menu.
 * Ends the game and shows the game overlay.
 */
function loadGameOverScreen() {
    document.getElementById('game-overlay').innerHTML = '';
    document.getElementById('game-overlay').innerHTML += /*html*/`
        <div class="headline screen-bg">
            <h1>Game Over</h1>
            <h2>Death, the great equalizer</h2>
        </div>
        <div class="btn-div screen-bg">
            <button class="primary" onclick="toggleMainMenu(), toggleGameOverlay(), initGame(), playButtonSound()">Restart</button>
            <button class="secondary" onclick="toggleMainMenu(), toggleGameOverlay(), loadMainMenu(), endingGame(), playButtonSound()">Main Menu</button>
        </div>
    `;
    endingGame();
}


/**
 * Displays the victory screen with options to restart or go back to the main menu. 
 * Ends the game and plays the win music.
 */
function loadWinScreen() {
    endingGame();
    playWinMusic()

    document.getElementById('game-overlay').innerHTML = '';
    document.getElementById('game-overlay').innerHTML += /*html*/`
        <div class="headline screen-bg">
            <h1>VICTORY</h1>
            <h2>GREAT ENEMY FELLED</h2>
        </div>
        <div class="btn-div screen-bg">
            <button class="primary" onclick="toggleMainMenu(), toggleGameOverlay(), initGame(), playButtonSound()">Restart</button>
            <button class="secondary" onclick="toggleMainMenu(), toggleGameOverlay(), loadMainMenu(), endingGame(), playButtonSound()">Main Menu</button>
        </div>
    `;
}


/**
 * Displays the Impressum (legal information) screen with address, contact details,
 * and a source link. Includes a button to return to the main menu.
 */
function loadImpressum() {
    document.getElementById('main-menu').innerHTML = '';
    document.getElementById('main-menu').innerHTML += /*html*/`
        <div class="screen-bg return-btn">
            <button class="return" onclick="loadMainMenu(), playReturnSound()"><</button>
        </div>
        <div class="headline screen-bg">
            <h1>Impressum</h1>
        </div>
        <div class="screen-bg impressum-text">
            <h2>Address</h2>
            <p>Vincent G&ouml;rner<br />
            Gro&szlig;erkmannsdorferstrasse 99<br />
            01514 Radeberg</p>
            <h2>Kontakt</h2>
            <p>Telefon: &#91;01752384923748&#93;<br />
            E-Mail: matrix.2000@web.de</p>
            <p>Quelle: <a href="https://www.e-recht24.de">eRecht24</a></p>
        </div>
    `;
}


/**
 * Displays a message asking the user to turn their device for proper gameplay.
 * Includes an icon to visually indicate the action.
 */
function loadMobileResponsiv() {
    document.getElementById('turn-device').innerHTML = '';
    document.getElementById('turn-device').innerHTML += /*html*/`
        Please turn your device to play! <br>
        <img src="assets/img/turn_device.svg">
    `;
}