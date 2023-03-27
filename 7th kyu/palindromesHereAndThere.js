function convertPalindromes(numbers) {
  return numbers.map(e=> e == e.toString().split("").reverse().join("") ? 1 : 0)
};
// .toString() return as string
// .split() return array from string
// .reverse() reverse array index
// .join() returns string from array
// .map() Fn to each element, if true return 1, false 0
