var cardOne = 'king';
var cardTwo = 'king';
var cardThree = 'queen';
var cardFour = 'queen';

//if (cardTwo === cardFour) {
//	alert('Sorry, try again.');
//}
//else if (cardTwo === cardThree) {
//	alert('Sorry, try again.');
//}
//else if (cardOne === cardFour) {
//	alert('Sorry, try again.');
//}
//else if (cardOne === cardThree) {
//	alert('Sorry, try again.');
//}
//else if (cardOne === cardTwo) {
//	alert('You found a match!');
//}
//else {
//	alert('You found a match!');
//}

var gameBoard = document.getElementById('game-board');
var cards = [];

var createBoard = function(){
	for (var i = 0; i < 4; i++){
		cards[i] = document.createElement('div')
		cards[i].className = 'card';
		gameBoard.appendChild(cards[i]);
	}
};

createBoard();
