console.log("JS file is connected to HTML! Woo!");

cardOne = "queen";
cardTwo = "queen";
cardThree = "king";
cardFour = "king";

// if (cardOne === cardTwo || cardOne === cardThree || cardOne === cardFour || cardTwo === cardThree || cardTwo === cardFour || cardThree === cardFour){
//   alert("You found a match!")
// }
// else {
//   alert("Sorry, Try again?")
// }

var gameBoard = document.getElementById("game-board");

for (var i=0; i<4; i++){
  createCards()
}

function createCards(){
  var card = document.createElement('div');
  gameBoard.appendChild(card)
  card.className = "card";
}
