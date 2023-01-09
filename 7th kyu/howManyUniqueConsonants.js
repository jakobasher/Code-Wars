function countConsonants(str) {
  let arr = str.replace(/[\W\daeiou_]+/gi, "").toLowerCase().split("")
  return [...new Set(arr)].length
}
// .replace() replace with, "" nothing in this case
// /[\W\daeiou_]+/ consonants only
// .toLowerCase() return all as lower case
// .split() return array from string
// ... spread syntax
// new Set() return unique values
