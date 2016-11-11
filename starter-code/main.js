console.log("JS file is connected to HTML! Woo!")

cardOne = "queen"
cardTwo = "queen"
cardThree = "king"
cardFour = "king"

if (cardOne === cardTwo || cardOne === cardThree || cardOne === cardFour || cardTwo === cardThree || cardTwo === cardFour || cardThree === cardFour){
  alert("You found a match!")
}
else {
  alert("Sorry, Try again?")
}
