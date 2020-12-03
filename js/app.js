'use strict';

// Greeting
var userName = prompt('What is your name?');
// // console.log('The user name is ' + userName + '!');
// alert('Hello, ' + userName + '! Welcome.');
// alert('Let\'s do a fun quiz so you can get to know me better. Ready? Here we go ...');

// // Question One
// //DONE - ask question y/n or yes or no response - normalize case
// var homeTown = prompt('Question 1: Am I from Seattle?').toLowerCase();

// // I log my result to get proof of life!
// // console.log(homeTown);

// if ((homeTown === 'no') || (homeTown === 'n')) {
//   //DONE - console.log the answer IF IT IS CORRECT in a string concatenation
//   //DONE - if it works, comment out console.log, send alert to user
//   // console.log('Yes, I live in Seattle, ' + userName + ' ' + ' answered: ' + homeTown);
//   // console.log(userName + ' is correct - not from Seattle.');
//   alert('That\'s Correct, ' + userName + '! I am not from Seattle.');
// } else {
//   // console.log(userName + ' is incorrect - not from Seattle.');
//   alert('Wrong!');
// }

// // Question Two
// var onlyChild = prompt('Question 2: Am I an only child?').toLowerCase();

// if ((onlyChild === 'no') || (onlyChild === 'n')) {
//   // console.log(userName + ' is correct. I have siblings');
//   alert('That\'s correct, ' + userName + '! I have siblings.');
// } else {
//   // console.log(userName + ' is incorrect. I am not an only onlyChild.');
//   alert('Wrong!');
// }

// // Question Three
// var manyHats = prompt('Question 3: Have I worn many hats throughout my job experiences?').toLowerCase();

// if ((manyHats === 'yes') || (manyHats === 'y')) {
//   // console.log(userName + ' is correct. I\'ve worked many jobs');
//   alert('You got it, ' + userName + '! I have worked in quite a few industries over the years.');
// } else {
//   // console.log(userName + ' is incorrect. I\'ve worn many hats.');
//   alert('Wrong!');
// }

// // Question Four
// var plantMom = prompt('Question 4: Do I like to take care of plants?').toLowerCase();

// if ((plantMom === 'yes') || (plantMom === 'y')) {
//   // console.log(userName + ' is correct. I love plants.');
//   alert('Correct, ' + userName + '! I have tons of them!');
// } else {
//   // console.log(userName + ' is incorrect. I love plants.');
//   alert('Wrong!');
// }

// // Question 5
// var healthCare = prompt('Question 5: Am I or have I ever worked in healthcare?').toLowerCase();

// if ((healthCare === 'yes') || (healthCare === 'y')) {
//   // console.log(userName + ' is correct. I have been a healthcare worker.');
//   alert('That\'s right, ' + userName + '! I have healthcare experience.');
// } else {
//   // console.log(userName + ' is incorrect. I have healthcare experience.');
//   alert('Wrong!');
// }

// Question 6
// Guess my favorite number!
var faveNumber = parseInt(prompt(`Question 6: Now it\'s time to guess my favorite number, ${userName}! I am giving you 4 attempts to get it right.`));

var youLose = false;
var remainingGuesses = 4;
var correctNumber = 5;

while (!youLose) {
  if (faveNumber === correctNumber) {
    // console.log(`${userName} guessed ${correctNumber}! That is right!`)
    alert(`That is correct, ${userName}! ${correctNumber} is my favorite number. Moving on to the next question...`);

    break;
  }

  // console.log(`${userName} guessed wrong.`);

  remainingGuesses--;

  // no more guesses remaining!
  if (remainingGuesses === 0) {
    youLose = true;
    alert(`Wrong! Sorry, ${userName}, you have no more guesses left. The correct answer is ${correctNumber}. Moving on to the next question ...`);

    // they still have guesses left!
  } else if (faveNumber < correctNumber) {
    faveNumber = parseInt(prompt(`Wrong! ${faveNumber} is too low. Guess again! ${remainingGuesses} guess(es) left!`));
  } else {
    faveNumber = parseInt(prompt(`Wrong! ${faveNumber} is too high. Guess again! ${remainingGuesses} guess(es) left!`));
  }
}

// Question 7
// Guess the foods I think are gross!

var foodGuessQuestion = prompt('Question 7: I have a list of some foods that I think are AWFUL. Try to guess one!');

var foodGuessAnswer = foodGuessQuestion.toLowerCase();

// TODO Store foods in an array - anchovies, candy corn, olives, Hawaiian pizza (also correct if they guess pineapple pizza)

var yuckyFoods = ['anchovies', 'candy corn', 'olives', 'hawaiian pizza', 'pineapple pizza'];

remainingGuesses = 6;
youLose; // this might be unnecessary code as it has already been declared, but I will keep it here for now to better keep track as I try to form my while loop
var found = false;

for (var i = 0; i < yuckyFoods.length; i++) {

  if (foodGuessAnswer === yuckyFoods[i]) {

    // when they guess a correct answer
    console.log(`${userName} guessed correctly. ${foodGuessAnswer} is a food I dislike.`);
    alert(`That's correct, ${userName}! `)
    break;
  }

  console.log(`${userName} guessed wrong.`);
  break;
}



// user gets 6 guesses

// the guesses end when player runs out of guesses OR if they guess a correct answer

// alert('Thanks for taking my About-Me quiz, ' + userName + '! I hope you enjoy looking at the rest of my web page.');
