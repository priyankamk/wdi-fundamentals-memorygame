console.log("Up and running!");

// var cardOne = "Queen";
// var cardTwo = "King";
// var cardThree = "Diamond";
// var cardFour = "Heart";

// console.log("User flipped" + cardOne);
// console.log("User flipped" + cardTwo);
// console.log("User flipped" + cardThree);
// console.log("User flipped" + cardFour);


var cards = ["Queen","Queen","King","King"];

var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again.");
}
};

var flipCard = function(cardId) {

	var cardOne = cards[0];
	cardsInPlay.push(cardOne);
	console.log("User flipped" + cardOne);


	var cardTwo = cards[2];
	cardsInPlay.push(cardTwo);
	console.log("User flipped" + cardTwo);

	console.log("User flipped" + cards[cardId]);

	cardsInPlay.push(cards[cardId]);

	// if (cardsInPlay[0].length === 2 && cardsInPlay[2].length !== 2) {
	// alert("You found a match");
	// } else {
	// alert("Sorry, try again");
};
// };
checkForMatch();
flipCard(0);
flipCard(2);

// cardsInPlay = console.log("User flipped Queen");


// cardsInPlay = console.log("User flipped King");


