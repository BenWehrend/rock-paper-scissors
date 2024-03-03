var classicGameButton = document.querySelector('.classic-game');
var challengeGameButton = document.querySelector('.challenge-game');
var rockButton = document.querySelector('.rock');
var paperButton = document.querySelector('.paper');
var scissorsButton = document.querySelector('.scissors');
var lizardButton = document.querySelector('.lizard');
var alienButton = document.querySelector('.alien');
var changeGameButton = document.querySelector('.change-game');
var subtitle = document.querySelector('.subtitle');
var playersWinCount = document.querySelector('.player-wins');
var computerWinCount = document.querySelector('.computer-wins');

var player = createPlayer('Player', '👨🏼‍🦳');
var computer = createPlayer('Computer', '💻');
var playerWins = 0;
var computerWins = 0;
var currentGame;

var classicArray = ['rock', 'paper', 'scissors'];
var challengeArray = ['rock', 'paper', 'scissors', 'lizard', 'alien'];

function createPlayer(name, token) {
    return {
        name,
        token
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
    currentGame = 'classic';
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
    currentGame = 'challenge';
    classicGameButton.style.visibility = "hidden";
    challengeGameButton.style.visibility = "hidden";
    rockButton.style.visibility = "visible";
    paperButton.style.visibility = "visible";
    scissorsButton.style.visibility = "visible";
    lizardButton.style.visibility = "visible";
    alienButton.style.visibility = "visible";
    changeGameButton.style.visibility = "visible";
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
    subtitle.innerHTML = "Choose your game!";
    removeClassicEvents();
    removeChallengeEvents();
}

function playClassicGame(playerChoice) {
    var computerChoice = classicArray[Math.floor(Math.random() * classicArray.length)];
    compareChoices(playerChoice, computerChoice);
    rockButton.textContent = playerChoice;
    scissorsButton.textContent = computerChoice;
    paperButton.style.visibility = "hidden";
}

function playChallengeGame(playerChoice) {
    var computerChoice = challengeArray[Math.floor(Math.random() * challengeArray.length)];
    compareChallengeChoices(playerChoice, computerChoice);
    rockButton.textContent = playerChoice;
    scissorsButton.textContent = computerChoice;
    lizardButton.style.visibility = "hidden";
    paperButton.style.visibility = "hidden";
    alienButton.style.visibility = "hidden";
}

function compareChoices(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        subtitle.innerHTML = "It's a tie!";
    } else if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
               (playerChoice === 'paper' && computerChoice === 'rock') ||
               (playerChoice === 'scissors' && computerChoice === 'paper')) {
        subtitle.innerHTML = "👨🏼‍🦳 Congrats! You win! 👨🏼‍🦳";;
        playerWins++;
    } else {
        subtitle.innerHTML = "💻 Oh no! You lose! 💻";
        computerWins++;
    }
    updateWinCount();
    setTimeout(function() {
        subtitle.innerHTML = "Choose your fighter!";
        rockButton.textContent = "🪨";
        scissorsButton.textContent = "✂️";
        paperButton.style.visibility = "visible";
    }, 1500);
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
        subtitle.innerHTML = "👨🏼‍🦳 Congrats! You win! 👨🏼‍🦳";
        playerWins++;
    } else {
        subtitle.innerHTML = "💻 Oh no! You lose! 💻";
        computerWins++;
    }
    updateWinCount();
    setTimeout(function() {
        subtitle.innerHTML = "Choose your fighter!";
        rockButton.textContent = "🪨";
        scissorsButton.textContent = "✂️";
        paperButton.style.visibility = "visible";
        lizardButton.style.visibility = "visible";
        alienButton.style.visibility = "visible";
    }, 1500);
}

function rockChoice() {
    if (currentGame === 'classic') {
        playClassicGame('rock');
    } else {
        playChallengeGame('rock');
    }
}

function paperChoice() {
    if (currentGame === 'classic') {
        playClassicGame('paper');
    } else {
        playChallengeGame('paper');
    }
}

function scissorsChoice() {
    if (currentGame === 'classic') {
        playClassicGame('scissors');
    } else { 
        playChallengeGame('scissors');
    }
}

function lizardChoice() {
    playChallengeGame('lizard');
}

function alienChoice() {
    playChallengeGame('alien');
}

function updateWinCount() {
    playersWinCount.textContent = `Wins: ${playerWins}`;
    computerWinCount.textContent = `Wins: ${computerWins}`;
}