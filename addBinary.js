// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

function addBinary(a, b) {
    let sum = a + b;
    let arr = "";
    while (sum > 0) {
        arr += sum % 2;
        sum /= 2;
        sum = Math.floor(sum);
    }
    return arr.split("").reverse().join("");
}

console.log(addBinary(10, 1));