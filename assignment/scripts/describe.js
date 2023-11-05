// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// This code is saying "hello" in one of two ways.
// First we set a variable name,(DECLARE) and set that to equal Dane
// Then we use booleon logic to output based on that variable -
// - if the name variable EXACTLY equals Mary, (which it does not) the console will log 'Hi, Mary!'
// - otherwise (ELSE) it will log 'How do you do?'

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We start with a variable, secret
// - then another variable "code"
// - code is set initially to 123
// then we engage in some logic 
// - if code is PRECISELY 123 then the secret we DECLARED! is assinged the value "super"
// the code is then doubled, 
// we are then on to the next step of computer logic -
// we have now doubled 123 - meaning that code equals 246
// "code" is not greater than 250 and secret is not assinged to duper
// the console logs "secret" at the end by printing super

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// we set out some variables - isStudent is true, age = 34, and zip = 55407
// then we enter a logic loop with 4 possible outcomes
// if the variable isStudent is precesely true and also zip is greater than 80000 
// - then log You're a student on the West Coast
// else if isStudent is precesely false or age is less than 30 
// - then log What are your hobbies
// else log welcome to prime
// the last one is logging How about the weather?

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';
// colorOne should be "blue"
let colorTwo = 'blue';
//colorTwo should be "red"
let mix = true;

if (mix === true) {
  colorOne = 'purple';
// colorTwo should also be "purple"
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
// should be && here not ||
// conversely we could eliminate the time condition atogether, it's a constant so it can't change
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
  // this line should be console.log('enter')
} else {
  console.log('enter');
  // this line should be console.log('no entry')
}
*/

