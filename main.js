var human = document.querySelector('.human');
var computer = document.querySelector('.computer');
var classicGameButton = document.querySelector('.classic-game');
var challengeGameButton = document.querySelector('.challenge-game');
var rockButton = document.querySelector('.rock');
var paperButton = document.querySelector('.paper');
var scissorsButton = document.querySelector('.scissors');
var lizardButton = document.querySelector('.lizard');
var alienButton = document.querySelector('.alien');
var changeGameButton = document.querySelector('.change-game');
var subtitle = document.querySelector('.subtitle');

function createPlayer(name, token, wins = 0) {
    return {
        name,
        token,
        wins
    }
}

function takeTurn(player1, player2) {

}

function createGame(player1, player2) {

}

function startClassicGame() {
    classicGameButton.style.visibility = "hidden";
    challengeGameButton.style.visibility = "hidden";
    rockButton.style.visibility = "visible";
    paperButton.style.visibility = "visible";
    scissorsButton.style.visibility = "visible";
    changeGameButton.style.visibility = "visible";
    subtitle.innerHTML = "Choose your fighter!";
}

classicGameButton.addEventListener('click', startClassicGame);

function startChallengeGame() {
    classicGameButton.style.visibility = "hidden";
    challengeGameButton.style.visibility = "hidden";
    rockButton.style.visibility = "visible";
    paperButton.style.visibility = "visible";
    scissorsButton.style.visibility = "visible";
    lizardButton.style.visibility = "visible";
    alienButton.style.visibility = "visible";
    changeGameButton.style.visibility = "visible";
    subtitle.innerHTML = "Choose your fighter!";
}

challengeGameButton.addEventListener('click', startChallengeGame);

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
}

changeGameButton.addEventListener('click', changeGame);


