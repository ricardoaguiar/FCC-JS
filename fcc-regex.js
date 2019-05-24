//using the .test() method

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex; // Change this line

//solution
let result = myRegex.test(myString);
console.log(result); //true


//Regular Expressions: Match Literal Strings

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /search/; // Change this line
let result = waldoRegex.test(waldoIsHiding);

//solution
let waldoRegex = /Waldo/; // Change this line
