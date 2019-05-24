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


//Regular Expressions: Match a Literal String with Different Possibilities
let petString = "James has a pet cat.";
let petRegex = /change/; // Change this line
let result = petRegex.test(petString);
//solution
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);

//Regular Expressions: Ignore Case While Matching
let myString = "freeCodeCamp";
let fccRegex = /change/; // Change this line
let result = fccRegex.test(myString);
//solution
let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; // using the ignore flag /i
let result = fccRegex.test(myString);

//Regular Expressions: Extract Matches
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /change/; // Change this line
let result = extractStr; // Change this line
//example
"Hello, World!".match(/Hello/);
// Returns ["Hello"]
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);
// Returns ["expressions"]
//solution




