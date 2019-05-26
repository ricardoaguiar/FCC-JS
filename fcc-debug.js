function zeroArray(m, n) {
  // Creates a 2-D array with m rows and n columns of zeroes
  let newArray = [];
  let row = [];
  for (let i = 0; i < m; i++) {
    // Adds the m-th row into newArray
     //reset the row=[] here
    for (let j = 0; j < n; j++) {
      // Pushes n zeroes into the current row to create the columns
      row.push(0);
    }
    // Pushes the current row, which now has n zeroes in it, to the array
    newArray.push(row);
  }
  return newArray;
}

//solution
let matrix = zeroArray(3, 2);
console.log(matrix);
  //solution
  function zeroArray(m, n) {
    let newArray = [];
    for (let i = 0; i < m; i++) {
       let row = []; /* row reset*/
      for (let j = 0; j < n; j++) {

        row.push(0);
      }
      newArray.push(row);
    }
    return newArray;
  }
  let matrix = zeroArray(3, 2);
  console.log(matrix);
