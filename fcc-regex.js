//using the .test() method

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex; // Change this line

//solution
let result = myRegex.test(myString);
console.log(result); //true
