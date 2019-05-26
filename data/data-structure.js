//Basic Data Structures: Copy an Array with the Spread Operator
// While slice() allows us to be selective about what elements of an array to copy, among several other useful tasks, ES6's new spread operator allows us to easily copy all of an array's elements, in order, with a simple and highly readable syntax. The spread syntax simply looks like this: ...

// In practice, we can use the spread operator to copy an array like so:

// let thisArray = [true, true, undefined, false, null];
// let thatArray = [...thisArray];
// thatArray equals [true, true, undefined, false, null]
// thisArray remains unchanged, and is identical to thatArray

function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // change code below this line
    newArr = [...arr]; //it is not correct. we need the push() array method to copy the items from one array to another. 
    // change code above this line
    num--;
  }
  return newArr;
}

// change code here to test different cases:
console.log(copyMachine([true, false, true], 2));

    //solution
    function copyMachine(arr, num) {
      let newArr = [];
      while (num >= 1) {
        // change code below this line
        newArr.push([...arr]); 
        // change code above this line
        num--;
      }
      return newArr;
    }

    // change code here to test different cases:
    console.log(copyMachine([true, false, true], 2)); //return true,false,true,true,false,true

//Check For The Presence of an Element With indexOf()
//example
let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

fruits.indexOf('dates') // returns -1
fruits.indexOf('oranges') // returns 2
fruits.indexOf('pears') // returns 1, the first index at which the element exists

//challenge
function quickCheck(arr, elem) {
  // change code below this line

  // change code above this line
}
// change code here to test different cases:
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

//solution1 //if statment to check if the return value. If return value (elem) = -1 (false) - (elem not in the arr)
function quickCheck(arr, elem) {
  if(arr.indexOf(elem)>=0) {
    return true;
  }
  return false;
}
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

//solution2
function quickCheck(arr, elem) {
return arr.indexOf(elem) >= 0 ? true : false; //arrow function solution. note the arrow function is anonymous. 
}
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
