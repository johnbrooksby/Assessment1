//////////////////PROBLEM 1////////////////////
/* Create a variable called 'myName' with a value that is your name as a string. */

//CODE HERE 

let myName = "John"; // My name is John

//////////////////PROBLEM 2////////////////////
/* Create a variable called 'faveNum' with a value that is your favorite number. */

//CODE HERE

let faveNum = 42; // 42 is the answer to life, the universe, and everything.  That's why it is my favorite number

//////////////////PROBLEM 3////////////////////
/* Create a variable called 'lovesCode' and assign it a boolean value. */

//CODE HERE

const lovesCode = true // #sofun

//////////////////PROBLEM 4////////////////////
/*
  Write an if-statement that checks if the faveNum variable is 
  equal to 13. If it is, console.log('lucky 13!'). 
  If it's not, console.log('not lucky 13').
*/

//CODE HERE

// check to see if the faveNum variable is equal to the number 13
if (faveNum === 13){ 
  console.log("lucky 13"); 
} else {
  console.log('not lucky 13');
}

//////////////////PROBLEM 5////////////////////
/*
  Write a for loop that prints out your faveNum 5 times.
*/

//CODE HERE

for(let i = 1; i <= 5; i++){
  console.log(i, ": ", faveNum);
}
