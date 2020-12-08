const findEvenIndex = arr => {
    let left = 0, right = arr.reduce((a, b) => a + b), size = arr.length;
    for (let i = 0; i < size; i++) {
        if (i > 0) left += arr[i - 1];
        right -= arr[i];

        if (left == right) return i;
    }

    return -1;
};


let arr = [1, 4, 1];
let ans = findEvenIndex(arr);
console.log(ans);