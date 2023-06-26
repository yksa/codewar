let array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [3, 5, 0],
];

function snail(array) {
  let result = [];

  while (array.length > 0) {
    console.log("start");
    // Get the first row and remove it from the array
    result = result.concat(array.shift());

    // Get the last element from each remaining row
    for (let i = 0; i < array.length; i++) {
      result.push(array[i].pop());
    }

    // Get the last row in reverse order and remove it from the array
    if (array.length > 0) {
      result = result.concat(array.pop().reverse());
    }

    // Get the first element from each remaining row in reverse order
    for (let i = array.length - 1; i >= 0; i--) {
      result.push(array[i].shift());
    }
    console.log("end");
  }

  return result;
}

console.log(snail(array));
