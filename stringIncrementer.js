// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString(string) {
  const pattern = /^\d+$/;
  let numbers = [];
  let foundIndex = null;
  let leadingZeros = 0;
  string
    .split("")
    .reverse()
    .some((item, index) => {
      if (pattern.test(item)) {
        item === "0" ? leadingZeros++ : numbers.push(item);
        foundIndex = index;
      } else return true;
    });

  const number = +[...numbers].reverse().join("") + 1;

  const stringNumber = number.toString();

  const totalZero =
    leadingZeros === 0
      ? 0
      : +[...numbers].reverse().join("") === 0 ||
        (numbers[numbers.length - 1] === "9" && number % 10 === 0)
      ? leadingZeros + stringNumber.length - 1
      : leadingZeros + stringNumber.length;

  return (
    string.slice(
      0,
      foundIndex !== null ? string.length - foundIndex - 1 : string.length
    ) + stringNumber.padStart(totalZero, "0")
  );
}

console.log(incrementString("foobar00999"));
console.log(incrementString("foobar023"));
console.log(incrementString("foobar"));
console.log(incrementString("foobar99"));
console.log(incrementString("foobar000003"));
