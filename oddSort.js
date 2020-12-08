// sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]

const oddSort = arr => {
    let size = arr.length
    let oddArr = [];
    let indexArr = [];

    for (i = 0; i < size; i++) {
        if (arr[i] % 2 == 1) {
            oddArr.push(arr[i]);
            indexArr.push(i);
        } else {

        }
    }

    oddArr = oddArr.sort((a, b) => a - b);
    for (i in indexArr) {
        arr[indexArr[i]] = oddArr[i];
    }
    return arr;
};

let arr = [1, 2, 8, 3, 4, 11, 5];
let ans = oddSort(arr);
console.log(ans);