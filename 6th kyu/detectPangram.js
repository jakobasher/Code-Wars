function isPangram(string){
  let arr = string.toLowerCase().match(/[A-Za-z]/g)
  return [...new Set(arr)].length == 26
}
// .toLowerCase() return all lower case
// .match() Retrieves result from a matching string against REGEX
// REGEX /[A-Za-z]/g all letters
// ... spread syntax
// new Set() returns unique values
// If new array = 26 returns true
