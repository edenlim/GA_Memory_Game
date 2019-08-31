var cards = [
	{
		rank: 'queen',
		suit: 'hearts',
		cardImage: "images/queen-of-hearts.png",
	},
	{
		rank: 'queen',
		suit: 'diamonds',
		cardImage: "images/queen-of-diamonds.png",
	},
	{
		rank: 'king',
		suit: 'hearts',
		cardImage: "images/king-of-hearts.png",
	},
	{
		rank: 'king',
		suit: 'diamonds',
		cardImage: "images/king-of-diamonds.png"
	}
];

var cardsInPlay = [];
var howManyPoints = 0;

function createBoard(){
	var points = document.getElementById("points");
	points.textContent = "Score: "+howManyPoints;
	for(var i = 0; i <cards.length; i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		var gameBoard = document.getElementById('game-board');
		gameBoard.appendChild(cardElement);
	}
	var resetButton = document.getElementById("resetButton");
	resetButton.addEventListener('click', resetBoard);
}

function checkForMatch(){
	if(cardsInPlay.length === 2){
		if (cardsInPlay[0] === cardsInPlay[1]) {
			howManyPoints++;
			document.getElementById("points").textContent = "Score: "+howManyPoints;
		  	console.log("You found a match!");
		  	alert("Match!");
		  	cardsInPlay = [];
		} else {
		  	console.log("Sorry, try again.");
		  	alert("Please try again.");
		  	cardsInPlay = [];
		  	var cardElement = document.getElementsByTagName("img");
			for(i = 0; i<cardElement.length; i++){
				cardElement[i].setAttribute('src', "images/back.png");
			}
		}
	}	
}

function flipCard(){
	var cardId = this.getAttribute('data-id');
	console.log("User flipped: " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src',cards[cardId].cardImage);
	checkForMatch();
}

function resetBoard(){
	cardsInPlay = [];
	var gameBoard = document.getElementById('game-board');
	var cardElement = document.getElementsByTagName("img");
	console.log(gameBoard);
	console.log(cardElement);
	for(i = 0; i<cardElement.length; i++){
		cardElement[i].setAttribute('src', "images/back.png");
	}
	console.log("Resetting Board!");
	alert("Board resetted!");

}

createBoard();