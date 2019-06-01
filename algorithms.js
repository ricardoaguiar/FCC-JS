function convertToF(celsius) {  
  let fahrenheit = celsius * 9/5 + 32; 
  return fahrenheit;
  console.log(fahrenheit);
}
convertToF(30);


function reverseString(str) {
  return str.split('').reverse().join('');
}
reverseString("hello");

