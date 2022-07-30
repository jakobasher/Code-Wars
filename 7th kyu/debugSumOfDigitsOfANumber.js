function getSumOfDigits(integer) {

  return integer.toString().split("").map(Number).reduce((a,c)=>a+c,0)


}

// .toString() returns string
// .split() returns array
// .map(Number) returns integer
// .reduce() returns a number
