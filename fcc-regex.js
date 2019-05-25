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
      let extractStr = "Extract the word 'coding' from this string.";
      let codingRegex = /coding/; // Change this line
      let result = extractStr.match(codingRegex); // Change this line
      console.log(result); //coding

//Regular Expressions: Find More Than the First Match
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /change/; // Change this line
let result = twinkleStar; // Change this line
  //solution
  let twinkleStar = "Twinkle, twinkle, little star";
  let starRegex = /Twinkle/gi; // Change this line // using the global (g) and ignore (i) flags
  let result = twinkleStar.match(starRegex); // Change this line
  console.log(result); // return Twinkle, twinkle


// Regular Expressions: Match Anything with Wildcard Period
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
humStr.match(huRegex); // Returns ["hum"]
hugStr.match(huRegex); // Returns ["hug"]
  //solution
  let exampleStr = "Let's have fun with regular expressions!";
  let unRegex = /.un/; // Change this line
  let result = unRegex.test(exampleStr);

//Regular Expressions: Find Characters with Lazy Matching
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*>/; // Change this line
let result = text.match(myRegex);

//Regular Expressions: Positive and Negative Lookahead
let sampleWord = "astronaut";
let pwRegex = /change/; // Change this line
let result = pwRegex.test(sampleWord);

  //Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long and have two consecutive digits.
  //solution
  let sampleWord = "astronaut";
  let pwRegex = /(?=\w{5,}?)(?=\D*\d{2})/; // Change this line
  let result = pwRegex.test(sampleWord);
  console.log(result);

