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

var playerWins = 0;
var computerWins = 0;
var currentGame;
var timeoutNow;

var classicArray = ['🪨', '📄', '✂️'];
var challengeArray = ['🪨', '📄', '✂️', '🦎', '👽'];

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
    clearTimeout(timeoutNow);
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
    const winningClassicCombos = {
        '🪨': ['✂️'],
        '✂️': ['📄'],
        '📄': ['🪨'],
    };

    if (playerChoice === computerChoice) {
        subtitle.innerHTML = "❔ It's a tie! ❔";
    }   else if (winningClassicCombos[playerChoice].includes(computerChoice)) {
        subtitle.innerHTML = "🍻 Score one for the home team 🍻";
        playerWins++;
    }   


    updateWinCount();
    timeoutNow = setTimeout(() => {
        resetClassic();
    }, 1250);
}

function compareChallengeChoices(playerChoice, computerChoice) {
    const winningChallengeCombos = {
        '🪨': ['✂️', '🦎'],
        '📄': ['🪨', '👽'],
        '✂️': ['📄', '🦎'],
        '🦎': ['📄', '👽'],
        '👽': ['🪨', '✂️']
    };

    if (playerChoice === computerChoice) {
        subtitle.innerHTML = "❔ It's a tie! ❔";
    } else if (winningChallengeCombos[playerChoice].includes(computerChoice)) {
        subtitle.innerHTML = "🍻 Score one for the home team 🍻";
        playerWins++;
    } else {
        subtitle.innerHTML = "❌ RNG says not this time ❌";
        computerWins++;
    }

    updateWinCount();
    timeoutNow = setTimeout(() => {
        resetChallenge();
    }, 1250);
}

function resetClassic() {
    subtitle.innerHTML = "Select your game:";
    rock.textContent = "🪨";
    scissors.textContent = "✂️";
    paper.style.visibility = "visible";
}

function resetChallenge() {
    subtitle.innerHTML = "Select your game:";
    rock.textContent = "🪨";
    scissors.textContent = "✂️";
    paper.style.visibility = "visible";
    lizard.style.visibility = "visible";
    alien.style.visibility = "visible";
}

function updateWinCount() {
    playersWinCount.textContent = `Wins: ${playerWins}`;
    computerWinCount.textContent = `Wins: ${computerWins}`;
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

classicGameButton.addEventListener('click', startClassicGame);
challengeGameButton.addEventListener('click', startChallengeGame);
changeGameButton.addEventListener('click', changeGame);