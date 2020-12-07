// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

const createPhoneNumber = (numbers) => {
    let phNo = ["("];
    for (i = 0, count = numbers.length; i < count; i++) {
        phNo.push(numbers[i].toString());
        if (i === 2) {
            phNo.push(')');
            phNo.push(' ');
        }
        if (i === 5) phNo.push('-');
    }
    return phNo.join('');
};

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let ans = createPhoneNumber(numbers);
console.log(ans);