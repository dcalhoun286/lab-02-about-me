'use strict';

// Greeting
var userName = prompt('What is your name?');

alert('Hello, ' + userName + '! Welcome.');

alert('Let\'s do a fun quiz so you can get to know me better. Ready? Here we go ...');
var totalCorrectGuesses = 0;

function questionOne() {
  // Question One
  var homeTown = prompt('Question 1: Am I from Seattle?').toLowerCase();

  if ((homeTown === 'no') || (homeTown === 'n')) {
    totalCorrectGuesses++;
    alert('That\'s Correct, ' + userName + '! I am not from Seattle.');
  } else {
    alert('Wrong!');
  }
}
questionOne();

function questionTwo() {
  // Question Two
  var onlyChild = prompt('Question 2: Am I an only child?').toLowerCase();

  if ((onlyChild === 'no') || (onlyChild === 'n')) {
    totalCorrectGuesses++;
    alert('That\'s correct, ' + userName + '! I have siblings.');
  } else {
    alert('Wrong!');
  }
}
questionTwo();

function questionThree() {
  // Question Three
  var manyHats = prompt('Question 3: Have I worn many hats throughout my job experiences?').toLowerCase();

  if ((manyHats === 'yes') || (manyHats === 'y')) {
    totalCorrectGuesses++;
    alert('You got it, ' + userName + '! I have worked in quite a few industries over the years.');
  } else {
    alert('Wrong!');
  }
}
questionThree();

function questionFour() {
  // Question Four
  var plantMom = prompt('Question 4: Do I like to take care of plants?').toLowerCase();

  if ((plantMom === 'yes') || (plantMom === 'y')) {
    totalCorrectGuesses++;
    alert('Correct, ' + userName + '! I have tons of them!');
  } else {
    alert('Wrong!');
  }
}
questionFour();

function questionFive() {
  // Question 5
  var healthCare = prompt('Question 5: Am I or have I ever worked in healthcare?').toLowerCase();
  if ((healthCare === 'yes') || (healthCare === 'y')) {
    totalCorrectGuesses++;
    alert('That\'s right, ' + userName + '! I have healthcare experience.');
  } else {
    alert('Wrong!');
  }
}
questionFive();

function questionSix() {
  // Question 6
  // Guess my favorite number!
  var faveNumber = parseInt(prompt(`Question 6: Now it\'s time to guess my favorite number, ${userName}! I am giving you 4 attempts to get it right.`));

  var youLose = false;

  var remainingGuesses = 4;

  var correctNumber = 5;

  while (!youLose) {
    remainingGuesses--;
    if (faveNumber === correctNumber) {
      alert(`That is correct, ${userName}! ${correctNumber} is my favorite number. Moving on to the next question...`);
      totalCorrectGuesses++;
      break;
    }

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
}
questionSix();

function questionSeven() {
  // Question 7
  // Guess the foods I think are gross!
  var foodGuessQuestion = prompt('Question 7: I have a list of some foods that I think are AWFUL. This list is definitely not exhaustive, but try to guess one!');

  var foodGuessAnswer = foodGuessQuestion.toLowerCase();

  var yuckyFoods = ['anchovies', 'candy corn', 'olives', 'hawaiian pizza', 'pineapple pizza'];

  var remainingGuesses = 6;

  var found = false;

  for (var i = 0; i <= yuckyFoods.length; i++) {

    remainingGuesses--;

    if (yuckyFoods[i] === foodGuessAnswer) {
      // when they guess a correct answer
      found = true;
      alert(`That's correct, ${userName}!`);
      totalCorrectGuesses++;
    } else if (!found) {
      for (var j = 1; j < yuckyFoods.length - 1; j++) {
        if (yuckyFoods[j] === foodGuessAnswer) {
          found = true;
          alert(`That's correct, ${userName}!`);
          break;
        }
      }

      // if they guess incorrectly
      if (remainingGuesses === 0) {
        // user exhausted all of their guesses!
        alert(`Sorry, ${userName}, you are out of guesses! Here were the possible answers...`);
        var listYuckyFoods;
        for (var k = 0; k < yuckyFoods.length; k++) {
          if (i < yuckyFoods.length) {
            listYuckyFoods += `${yuckyFoods[k]}, `;
          } else {
            listYuckyFoods += `${yuckyFoods[k]}`;
          }
        }
        alert('All possible correct answers: ' + listYuckyFoods);

      } else if (foodGuessAnswer !== yuckyFoods[j]) {
        foodGuessQuestion = prompt(`Wrong! ${foodGuessAnswer} is not a correct answer. You have ${remainingGuesses} guess(es) left.`);
        foodGuessAnswer = foodGuessQuestion.toLowerCase();
      }
    }
  }

}
questionSeven();

alert(`Thanks for taking my About-Me quiz, ${userName}! You had a total of ${totalCorrectGuesses} correct answers. I hope you enjoy looking at the rest of my web page.`);
