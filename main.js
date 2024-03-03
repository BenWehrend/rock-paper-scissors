var player = document.querySelector('.player');
var computer = document.querySelector('.computer');
var classicGameButton = document.querySelector('.classic-game');
var challengeGameButton = document.querySelector('.challenge-game');
var rockButton = document.querySelector('.rock');
var paperButton = document.querySelector('.paper');
var scissorsButton = document.querySelector('.scissors');
var lizardButton = document.querySelector('.lizard');
var alienButton = document.querySelector('.alien');
var changeGameButton = document.querySelector('.change-game');
var title = document.querySelector('.title');
var subtitle = document.querySelector('.subtitle');

var classicArray = ['rock', 'paper', 'scissors'];
var challengeArray = ['rock', 'paper', 'scissors', 'lizard', 'alien'];

function createPlayer(name, token, wins) {
    return {
        name,
        token,
        wins
    }
}

function addClassicEvents() {
    rockButton.addEventListener('click', rockChoice);
    paperButton.addEventListener('click', paperChoice);
    scissorsButton.addEventListener('click', scissorsChoice);
}

function removeClassicEvents() {
    rockButton.removeEventListener('click', rockChoice);
    paperButton.removeEventListener('click', paperChoice);
    scissorsButton.removeEventListener('click', scissorsChoice);
}

function addChallengeEvents() {
    addClassicEvents();
    lizardButton.addEventListener('click', lizardChoice);
    alienButton.addEventListener('click', alienChoice);
}

function removeChallengeEvents() {
    removeClassicEvents();
    lizardButton.removeEventListener('click', lizardChoice);
    alienButton.removeEventListener('click', alienChoice);
}

classicGameButton.addEventListener('click', startClassicGame);
challengeGameButton.addEventListener('click', startChallengeGame);
changeGameButton.addEventListener('click', changeGame);

function startClassicGame() {
    classicGameButton.style.visibility = "hidden";
    challengeGameButton.style.visibility = "hidden";
    rockButton.style.visibility = "visible";
    paperButton.style.visibility = "visible";
    scissorsButton.style.visibility = "visible";
    changeGameButton.style.visibility = "visible";
    subtitle.innerHTML = "Choose your fighter!";
    addClassicEvents();
}

function startChallengeGame() {
    classicGameButton.style.visibility = "hidden";
    challengeGameButton.style.visibility = "hidden";
    rockButton.style.visibility = "visible";
    paperButton.style.visibility = "visible";
    scissorsButton.style.visibility = "visible";
    lizardButton.style.visibility = "visible";
    alienButton.style.visibility = "visible";
    changeGameButton.style.visibility = "visible";
    title.innerHTML = "Rock, Paper, Scissors, Lizard, Alien"
    subtitle.innerHTML = "Choose your fighter!";
    addClassicEvents();
    addChallengeEvents();
}

function changeGame() {
    classicGameButton.style.visibility = "visible";
    challengeGameButton.style.visibility = "visible";    
    rockButton.style.visibility = "hidden";
    paperButton.style.visibility = "hidden";
    scissorsButton.style.visibility = "hidden";
    lizardButton.style.visibility = "hidden";
    alienButton.style.visibility = "hidden";
    changeGameButton.style.visibility = "hidden";
    title.innerHTML = "Rock, Paper, Scissors";
    subtitle.innerHTML = "Choose your game!";
    removeClassicEvents();
    removeChallengeEvents();
}

function playClassicGame(playerChoice) {
    var computerChoice = classicArray[Math.floor(Math.random() * classicArray.length)];
    compareChoices(playerChoice, computerChoice);
}

function playChallengeGame(playerChoice) {
    var computerChoice = challengeArray[Math.floor(Math.random() * challengeArray.length)];
    compareChallengeChoices(playerChoice, computerChoice);
}

function compareChoices(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        subtitle.innerHTML = "It's a tie!";
    } else if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
               (playerChoice === 'paper' && computerChoice === 'rock') ||
               (playerChoice === 'scissors' && computerChoice === 'paper')) {
        subtitle.innerHTML = "Congrats! You win!";
    } else {
        subtitle.innerHTML = "Oh no! You lose!";
    }
}

function compareChallengeChoices(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        subtitle.innerHTML = "It's a tie!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper') ||
        (playerChoice === 'rock' && computerChoice === 'lizard') ||
        (playerChoice === 'lizard' && computerChoice === 'alien') ||
        (playerChoice === 'alien' && computerChoice === 'scissors') ||
        (playerChoice === 'scissors' && computerChoice === 'lizard') ||
        (playerChoice === 'lizard' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'alien') ||
        (playerChoice === 'alien' && computerChoice === 'rock')
    ) {
        subtitle.innerHTML = "Congrats! You win!";
    } else {
        subtitle.innerHTML = "Oh no! You lose!";
    }
}

function rockChoice() {
    playClassicGame('rock');
}

function paperChoice() {
    playClassicGame('paper');
}

function scissorsChoice() {
    playClassicGame('scissors');
}

function lizardChoice() {
    playChallengeGame('lizard');
}

function alienChoice() {
    playChallengeGame('alien');
}