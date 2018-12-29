console.log("Up and running!");

// var cardOne = "Queen";
// var cardTwo = "King";
// var cardThree = "Diamond";
// var cardFour = "Heart";

// console.log("User flipped" + cardOne);
// console.log("User flipped" + cardTwo);
// console.log("User flipped" + cardThree);
// console.log("User flipped" + cardFour);

// var flipCard = function(cardId){

// }

var cards = ["Queen","Queen","King","King"];

var cardsInPlay = [];


var cardOne = cards[0];
cardsInPlay.push(cardOne);
// cardsInPlay = console.log("User flipped Queen");


var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
// cardsInPlay = console.log("User flipped King");

if (cardsInPlay[0].length === 2 && cardsInPlay[2].length !== 2) {
	alert("You found a match");
} else {
	alert("Sorry, try again");
}

