const findOdd = A => {
    let obj = {};

    for (i in A) {
        if (!obj[A[i]]) {
            obj[A[i]] = 1;
        } else {
            obj[A[i]] += 1;
        }
    }
    console.log(obj);
    for (key in obj) {
        if (obj[key] % 2 !== 0) {
            return Number(key);
        }
    }
};



let arr = [1, 1, 2, 3, 4, 4, 4, 5, 5];
console.log(findOdd(arr));