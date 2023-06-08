function isPalindrome(x) {
  let string = x.toString().toLowerCase().split("").reverse().join("")
  return x.toString().toLowerCase() == string
}
// .toString() return as string
// .toLowerCase() return string with lower case if possible
// .split() return array from string
// .reverse() reverses array index
// .join() return string from array
