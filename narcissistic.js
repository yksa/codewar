const narcissistic = value => {
    let arr = value.toString().split('');
    let size = arr.length;
    let total = 0;
    for (i in arr) {
        total += Math.pow(arr[i], size);
    }
    let result = value == total ? true : false;
    return result;
};

let value = 1652;
let result = narcissistic(value);
console.log(result);

// A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).
// 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// 1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938

// The Challenge:

// Your code must return true or false depending upon whether the given number is a Narcissistic number in base 10.

// Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.
