function countLettersAndDigits(input) {
  return input
    .split("")
    .filter(e => (e>="A" && e<= "Z") || (e>="a" && e<= "z") || (e>="0" && e<= "9"))
    .length
}
// .split() returns array
// .filter() using unicode to filter letters and numbers by unicode values
