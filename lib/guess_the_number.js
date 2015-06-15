function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var randomNumber = getRandomInt(0,100)

var name = prompt("What is your name?");
alert("Your name is "+ name);

var userNumber = prompt("What is your guess, " + name + "? (Between 0 and 100)");


if (parseInt(userNumber) === randomNumber) {
  alert("You guessed correctly, " + name);
} else {
  alert("Wrong! You're a fool. The number was: " + randomNumber);
}
