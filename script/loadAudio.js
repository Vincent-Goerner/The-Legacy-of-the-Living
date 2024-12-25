let gameSoundsSource = [
    './assets/audio/melee_attack.mp3',
    './assets/audio/firing_arrow.mp3',
    './assets/audio/player_walking.wav',
    './assets/audio/jump.mp3',
    './assets/audio/jump_landing.mp3',
    './assets/audio/player_hurt.mp3',
    './assets/audio/player_death.mp3',
    './assets/audio/skeleton_walking_2.wav',
    './assets/audio/skeleton_hurt.mp3',
    './assets/audio/skeleton_hurt.mp3',
    './assets/audio/boss_idle.mp3',
    './assets/audio/boss_walking.mp3',
    './assets/audio/boss_hurt.mp3',
    './assets/audio/boss_death.mp3',
    './assets/audio/collect_arrow.mp3',
    './assets/audio/collect_coin.mp3',
    './assets/audio/bow_tension.mp3',
    './assets/audio/defeat.mp3',
    './assets/audio/boss_fight_1.mp3',
    './assets/audio/boss_fight_2.mp3',
    './assets/audio/background_1.mp3',
    './assets/audio/background_2.mp3'
];
let menuSound = [
    './assets/audio/pause_game.mp3',
    './assets/audio/unpause_game.mp3',
    './assets/audio/return_button.mp3',
    './assets/audio/click_button.mp3',
    './assets/audio/click_button_2.mp3',
    './assets/audio/menu_theme_2.mp3',
    './assets/audio/victory.mp3'
];

let audio;


/**
 * Loads game audio files and stores them in the `gameSounds` object.
 * Each audio file is created as a mutable audio element.
 *
 * @function
 */
function loadGameAudio() {
    let gameSounds = {};

    gameSoundsSource.forEach((path) => {
        let audio = setMutableAudio();
        audio.src = path;
        gameSounds[path] = audio;
    });
    audio = gameSounds;
}


/**
 * Loads menu audio files and stores them in the `menuAudio` object.
 * Each audio file is created as a mutable audio element.
 *
 * @function
 */
function loadMenuAudio() {
    menuSound.forEach((path) => {
        let audio = setMutableAudio();
        audio.src = path;
        menuAudio[path] = audio;        
    })
}