var gameBoard = document.getElementById('game-board');
var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

function createBoard() {
	for (var i = 0; i < cards.length; i++){
		var card = document.createElement('div');
		card.className += 'card';
		card.setAttribute('data-card', cards[i]);
		card.addEventListener('click', isTwoCards);
		document.getElementsByClassName('board')[0].appendChild(card);
	}
};

function isTwoCards() {
	var attr = this.getAttribute('data-card');
	cardsInPlay.push(attr);
	if (attr === 'king') {
		this.innerHTML = '<img src="kingCard.jpg" alt="King of Spades">';
	}
	else {
		this.innerHTML = '<img src="queenCard.jpg" alt="Queen of Spades">';
	}

	if (cardsInPlay.length === 2) {
		setTimeout(function(){ 
			isMatch(cardsInPlay);
			cardsInPlay = [];
		}, 300);
	}
};

function isMatch(pair) {
	if (pair[0] === pair[1]) {
		alert('You found a match!');
	}
	else {
		alert('Sorry, try again.');
	}

	var tempCards = document.getElementsByClassName('card');
	for (var i = 0; i < tempCards.length; i++) {
		tempCards[i].innerHTML = '';	
	}
};

createBoard();
