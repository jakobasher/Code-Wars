function sumEvenNumbers(input) {
  let arr = input.filter(e => e%2==0)
  return arr.reduce((a,c) => a+c, 0)
}

// .filter() returns filtered array
// .reduce() returns value from array
