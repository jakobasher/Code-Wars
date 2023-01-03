function reverseLetter(str) {
  return str = str.replace(/[^a-z]/gi, "").split("").reverse().join("") 
}
// .replace() replaces letter in string with
// REGEX /[^a-z]/gi, g=global search, i=case insensitive, ^= means "Match the start of the string" (more exactly, the position before the first character in the string, so it does not match an actual character).
// .split() returns array from string
// .reverse() reverses elements in array
// .join() returns string from array
