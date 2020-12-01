'use strict';

var userName = prompt('What is your name?');
console.log('The user name is ' + userName + '!');

// Question One
//DONE - ask question y/n or yes or no response - normalize case
var homeTown = prompt('Do I live in Seattle?').toLowerCase();

// I log my result to get proof of life!
// console.log(homeTown);

if (homeTown === 'yes' || homeTown === 'y'){
  //DONE - console.log the answer IF IT IS CORRECT in a string concatenation
  //DONE - if it works, comment out console.log, send alert to user
  // console.log('Yes, I live in Seattle, ' + userName + ' ' + ' answered: ' + homeTown);
  alert('That\'s Correct!');
}

// Question two
//TODO - ask question
//TODO - console.log the answer in a string concatenation
//TODO - if it works, comment out console.log, send alert to user


// var booleanOne = true;  // 1 or 0
// var booleanTwo = false;
// var booleanThree = true;

// if (booleanOne && booleanThree) {
//   console.log('this worked');
// }
// //        true      false           true
// if ((booleanOne || booleanTwo) && booleanThree) {
//   console.log('will this work?');
// }
// if (booleanThree) {
//   console.log('this should totally work!');
// }


// TODO change alert:  thank user, give meaning message with their name?
// alert('Thanks for answering ' + userName + ', ' + homeTown + ' is great!');