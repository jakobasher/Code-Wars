function sumDigits(number) {
  if (number == 0) return 0
  return number.toString().split("").map(Number).filter(Number).reduce((a,c)=>a+c)
}
// .toString() return as string
// .split() return as array
// .map() return element as integers, in this case
// .filter() returns copy of array 
// .reduce() add elements
