console.log("JS file is connected to HTML! Woo!");
cards = ["queen","queen","king", "king"];
cardsInPlay = [];
// cardOne = "queen";
// cardTwo = "queen";
// cardThree = "king";
// cardFour = "king";

// if (cardOne === cardTwo || cardOne === cardThree || cardOne === cardFour || cardTwo === cardThree || cardTwo === cardFour || cardThree === cardFour){
//   alert("You found a match!")
// }
// else {
//   alert("Sorry, Try again?")
// }

var gameBoard = document.getElementById("game-board");

for (var i=0; i<cards.length; i++){
  createCards();
}

function createCards(){
  var card = document.createElement('div');
  card.className = "card";
  card.setAttribute('data-card', cards[i]);
  gameBoard.appendChild(card);
  card.addEventListener('click', isTwoCards);

}

function isTwoCards(){
  if(this.getAttribute('data-card') == "king"){
    this.innerHTML = "<div class='king'></div> ";
  }
  else{
    this.innerHTML = "<div class='queen'></div> ";
  }
  //pushes data-card aka king or queen to the empty array cardsInPlay
  cardsInPlay.push(this.getAttribute('data-card'));

  //checks to see if two cards are flipped over or "cardsInPlay"
  if (cardsInPlay.length === 2){
  // if the two cards match then it will reset cards in play back to empty essentially resetting the game.
    isMatch(cardsInPlay);
    cardsInPlay = [];

  }
}
function isMatch(x){
  if (x[0] !== x[1]){
    setTimeout(function(){ alert("KEEP TRYING, DON'T QUIT :)");
    x = document.getElementsByClassName('card');
    x[0].innerHTML = " ";
    x[1].innerHTML = " ";
    x[2].innerHTML = " ";
    x[3].innerHTML = " ";}, 500);
  }
  else{
    setTimeout(function(){ alert("NICE JOB, YOU FOUND A MATCH!");
    x = document.getElementsByClassName('card');
    x[0].innerHTML = " ";
    x[1].innerHTML = " ";
    x[2].innerHTML = " ";
    x[3].innerHTML = " ";}, 500);
  }

}
