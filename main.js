var human = document.querySelector('.human');
var computer = document.querySelector('.computer');
var classicGame = document.querySelector('.classic-game');
var challengeGame = document.querySelector('.challenge-game');


function createPlayer(name, token, wins) {

}

function takeTurn(player1, player2) {

}

function createGame(player1, player2) {

}

function startGame() {
    classicGame.style.visibility = "hidden";
    challengeGame.style.visibility = "hidden";
}

classicGame.addEventListener('click', startGame);
challengeGame.addEventListener('click', startGame);