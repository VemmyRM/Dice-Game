// Saving the h1 containing the title to "title"
var title = document.getElementsByTagName("h1")[0];
// Saving the button tag to "button"
var button = document.getElementsByTagName("button")[0];
// Saving the player 1 p tag to "Player1"
var player1 = document.getElementById("player1");
// Saving the player 2 p tag to "Player2"
var player2 = document.getElementById("player2");
// Saving the img tag containing the first dice image to "dice1"
var dice1 = document.getElementsByClassName("img1")[0];
// Saving the img tag containing the second dice image to "dice2"
var dice2 = document.getElementsByClassName("img2")[0];

// Roll function to roll the dice and change the elements on the page
const roll = () => {

  //get 2 random numbers between 1 and 6
  var number1 = Math.floor(Math.random() * 6) + 1;
  var number2 = Math.floor(Math.random() * 6) + 1;

  //update the image of each dice to match the corresponding random number
  var image1 = "images/dice" + number1 + ".png";
  var image2 = "images/dice" + number2 + ".png";
  dice1.setAttribute("src", image1);
  dice2.setAttribute("src", image2);

  //Displaying the name of the winning die or declaring a draw
  if (number1 > number2) {
    title.textContent = player1.textContent +  " Wins!";
  } else if (number2 > number1) {
    title.textContent = player2.textContent + " Wins!";
  } else {
    title.textContent = "Draw!";
  }
  
  //changing the button's content to read "roll again!"
  button.textContent = "Roll again!";
}