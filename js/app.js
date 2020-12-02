'use strict';

var userName = prompt('What is your name?');
// console.log('The user name is ' + userName + '!');
alert('Hello, ' + userName + '! Welcome.');
alert('Let\'s do a fun quiz so you can get to know me better. Ready? Here we go ...');

// Question One
//DONE - ask question y/n or yes or no response - normalize case
var homeTown = prompt('Question 1: Am I from Seattle?').toLowerCase();

// I log my result to get proof of life!
// console.log(homeTown);

if ((homeTown === 'no') || (homeTown === 'n')) {
  //DONE - console.log the answer IF IT IS CORRECT in a string concatenation
  //DONE - if it works, comment out console.log, send alert to user
  // console.log('Yes, I live in Seattle, ' + userName + ' ' + ' answered: ' + homeTown);
  // console.log(userName + ' is correct - not from Seattle.');
  alert('That\'s Correct, ' + userName + '! I am not from Seattle.');
} else {
  // console.log(userName + ' is incorrect - not from Seattle.');
  alert('Wrong!');
}

var onlyChild = prompt('Question 2: Am I an only child?').toLowerCase();

if ((onlyChild === 'no') || (onlyChild === 'n')) {
  // console.log(userName + ' is correct. I have siblings');
  alert('That\'s correct, ' + userName + '! I have siblings.');
} else ((onlyChild === 'yes') || (onlyChild === 'y')) {
  // console.log(userName + ' is incorrect. I am not an only onlyChild.');
  alert('Wrong!');
}

var manyHats = prompt('Question 3: Have I worn many hats throughout my job experiences?').toLowerCase();

if ((manyHats === 'yes') || (manyHats === 'y')) {
  // console.log(userName + ' is correct. I\'ve worked many jobs');
  alert('You got it, ' + userName + '! I have worked in quite a few industries over the years.');
} else ((manyHats === 'no') || (manyHats === 'n')) {
  // console.log(userName + ' is incorrect. I\'ve worn many hats.');
  alert('Wrong!');
}

var plantMom = prompt('Question 4: Do I like to take care of plants?').toLowerCase();

if ((plantMom === 'yes') || (plantMom === 'y')) {
  // console.log(userName + ' is correct. I love plants.');
  alert('Correct, ' + userName + '! I have tons of them!');
} else ((plantMom === 'no') || (plantMom === 'n')) {
  // console.log(userName + ' is incorrect. I love plants.');
  alert('Wrong!');
}

var healthCare = prompt('Last question: Am I or have I ever worked in healthcare?').toLowerCase();

if ((healthCare === 'yes') || (healthCare === 'y')) {
  // console.log(userName + ' is correct. I have been a healthcare worker.');
  alert('That\'s right, ' + userName + '! I have healthcare experience.');
} else ((healthCare === 'no') || (healthCare === 'n')) {
  // console.log(userName + ' is incorrect. I have healthcare experience.');
  alert('Wrong!');
}

alert('Thanks for taking my About-Me quiz, ' + userName + '! I hope you enjoy looking at the rest of my web page.');
