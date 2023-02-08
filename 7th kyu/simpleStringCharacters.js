function solve(s){
  let upper = s.match(/[A-Z]/g) == null ? 0 : s.match(/[A-Z]/g).length
  let lower = s.match(/[a-z]/g) == null ? 0 : s.match(/[a-z]/g).length
  let num = s.match(/[0-9]/g) == null ? 0 : s.match(/[0-9]/g).length
  let character = s.length-lower-upper-num
  return [upper, lower, num, character]
}
// .match() returns all match found in string with REGEX
// REGEX /[A-Z]/g all capital letters
// REGEX /[a-z]/g all lower case letters
// REGEX /[0-9]/g all numbers
// Characters can do /[^A-Z0-9]/gi to filter out all letters all numbers global case insensitive
