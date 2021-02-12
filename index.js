const roll = () => {
  var number1 = Math.floor(Math.random() * 6) + 1;
var number2 = Math.floor(Math.random() * 6) + 1;
var dice1 = document.getElementsByClassName("img1")[0];
var dice2 = document.getElementsByClassName("img2")[0];
var title = document.getElementsByTagName("h1")[0];
var button = document.getElementsByTagName("button")[0];
var image1 = "images/dice" + number1 + ".png";
var image2 = "images/dice" + number2 + ".png";
dice1.setAttribute("src", image1);
dice2.setAttribute("src", image2);
if (number1 > number2) {
  title.textContent = "Player 1 Wins!";
} else if (number2 > number1) {
  title.textContent = "Player 2 Wins!";
} else {
  title.textContent = "Draw!";
}
button.textContent = "Roll again!";
}