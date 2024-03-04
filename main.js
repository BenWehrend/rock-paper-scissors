var classicGameButton = document.querySelector('.classic-game');
var challengeGameButton = document.querySelector('.challenge-game');
var rock = document.querySelector('.rock');
var paper = document.querySelector('.paper');
var scissors = document.querySelector('.scissors');
var lizard = document.querySelector('.lizard');
var alien = document.querySelector('.alien');
var changeGameButton = document.querySelector('.change-game');
var subtitle = document.querySelector('.subtitle');
var playersWinCount = document.querySelector('.player-wins');
var computerWinCount = document.querySelector('.computer-wins');
var playerResult = document.querySelector('.player-choice');
var computerResult = document.querySelector('.computer-choice');

var player = createPlayer('Player', '⛷️');
var computer = createPlayer('Computer', '💻');
var playerWins = 0;
var computerWins = 0;
var currentGame;

var classicArray = ['🪨', '📄', '✂️'];
var challengeArray = ['🪨', '📄', '✂️', '🦎', '👽'];

function createPlayer(name, token) {
    return {
        name,
        token
    }
}

function addClassicEvents() {
    rock.addEventListener('click', rockChoice);
    paper.addEventListener('click', paperChoice);
    scissors.addEventListener('click', scissorsChoice);
}

function removeClassicEvents() {
    rock.removeEventListener('click', rockChoice);
    paper.removeEventListener('click', paperChoice);
    scissors.removeEventListener('click', scissorsChoice);
}

function addChallengeEvents() {
    addClassicEvents();
    lizard.addEventListener('click', lizardChoice);
    alien.addEventListener('click', alienChoice);
}

function removeChallengeEvents() {
    removeClassicEvents();
    lizard.removeEventListener('click', lizardChoice);
    alien.removeEventListener('click', alienChoice);
}

classicGameButton.addEventListener('click', startClassicGame);
challengeGameButton.addEventListener('click', startChallengeGame);
changeGameButton.addEventListener('click', changeGame);

function startClassicGame() {
    currentGame = 'classic';
    classicGameButton.style.visibility = "hidden";
    challengeGameButton.style.visibility = "hidden";
    rock.style.visibility = "visible";
    paper.style.visibility = "visible";
    scissors.style.visibility = "visible";
    changeGameButton.style.visibility = "visible";
    subtitle.innerHTML = "Choose your fighter!";
    addClassicEvents();
}

function startChallengeGame() {
    currentGame = 'challenge';
    classicGameButton.style.visibility = "hidden";
    challengeGameButton.style.visibility = "hidden";
    rock.style.visibility = "visible";
    paper.style.visibility = "visible";
    scissors.style.visibility = "visible";
    lizard.style.visibility = "visible";
    alien.style.visibility = "visible";
    changeGameButton.style.visibility = "visible";
    subtitle.innerHTML = "Choose your fighter!";
    addClassicEvents();
    addChallengeEvents();
}

function changeGame() {
    classicGameButton.style.visibility = "visible";
    challengeGameButton.style.visibility = "visible";    
    rock.style.visibility = "hidden";
    paper.style.visibility = "hidden";
    scissors.style.visibility = "hidden";
    lizard.style.visibility = "hidden";
    alien.style.visibility = "hidden";
    changeGameButton.style.visibility = "hidden";
    subtitle.innerHTML = "Select your game:";
    removeClassicEvents();
    removeChallengeEvents();
}

function playClassicGame(playerChoice) {
    var computerChoice = classicArray[Math.floor(Math.random() * classicArray.length)];
    compareChoices(playerChoice, computerChoice);
    rock.textContent = playerChoice;
    scissors.textContent = computerChoice;
    paper.style.visibility = "hidden";
}

function playChallengeGame(playerChoice) {
    var computerChoice = challengeArray[Math.floor(Math.random() * challengeArray.length)];
    compareChallengeChoices(playerChoice, computerChoice);
    rock.textContent = playerChoice;
    scissors.textContent = computerChoice;
    lizard.style.visibility = "hidden";
    paper.style.visibility = "hidden";
    alien.style.visibility = "hidden";
}

function compareChoices(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        subtitle.innerHTML = "It's a tie!";
    } else if ((playerChoice === '🪨' && computerChoice === '✂️') ||
               (playerChoice === '📄' && computerChoice === '🪨') ||
               (playerChoice === '✂️' && computerChoice === '📄')) {
        subtitle.innerHTML = "⛷️ Congrats! You win! ⛷️";;
        playerWins++;
    } else {
        subtitle.innerHTML = "💻 Oh no! You lose! 💻";
        computerWins++;
    }
    updateWinCount();
    setTimeout(function() {
        subtitle.innerHTML = "Select your game:";
        rock.textContent = "🪨";
        scissors.textContent = "✂️";
        paper.style.visibility = "visible";
    }, 1000);
}

function compareChallengeChoices(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        subtitle.innerHTML = "It's a tie!";
    } else if (
        (playerChoice === '🪨' && computerChoice === '✂️') ||
        (playerChoice === '📄' && computerChoice === '🪨') ||
        (playerChoice === '✂️' && computerChoice === '📄') ||
        (playerChoice === '🪨' && computerChoice === '🦎') ||
        (playerChoice === '🦎' && computerChoice === '👽') ||
        (playerChoice === '👽' && computerChoice === '✂️') ||
        (playerChoice === '✂️' && computerChoice === '🦎') ||
        (playerChoice === '🦎' && computerChoice === '📄') ||
        (playerChoice === '📄' && computerChoice === '👽') ||
        (playerChoice === '👽' && computerChoice === '🪨')
    ) {
        subtitle.innerHTML = "⛷️ Congrats! You win! ⛷️";
        playerWins++;
    } else {
        subtitle.innerHTML = "💻 Oh no! You lose! 💻";
        computerWins++;
    }
    updateWinCount();
    setTimeout(function() {
        subtitle.innerHTML = "Select your game:";
        rock.textContent = "🪨";
        scissors.textContent = "✂️";
        paper.style.visibility = "visible";
        lizard.style.visibility = "visible";
        alien.style.visibility = "visible";
    }, 1000);
}

function rockChoice() {
    if (currentGame === 'classic') {
        playClassicGame('🪨');
    } else {
        playChallengeGame('🪨');
    }
}

function paperChoice() {
    if (currentGame === 'classic') {
        playClassicGame('📄');
    } else {
        playChallengeGame('📄');
    }
}

function scissorsChoice() {
    if (currentGame === 'classic') {
        playClassicGame('✂️');
    } else { 
        playChallengeGame('✂️');
    }
}

function lizardChoice() {
    playChallengeGame('🦎');
}

function alienChoice() {
    playChallengeGame('👽');
}

function updateWinCount() {
    playersWinCount.textContent = `Wins: ${playerWins}`;
    computerWinCount.textContent = `Wins: ${computerWins}`;
}