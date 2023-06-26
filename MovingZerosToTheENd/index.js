const arr = [false, 1, 0, 1, 2, 0, 1, 3, "a"];

function moveZeros(arr) {
  let zeroArr = [];
  while (arr.indexOf(0) >= 0) {
    const zeroIndex = arr.indexOf(0);
    zeroArr = [...zeroArr, ...arr.splice(zeroIndex, 1)];
  }
  return [...arr, ...zeroArr];
}

console.log("origninal arr ", arr);
console.log("modified arr ", moveZeros(arr));
