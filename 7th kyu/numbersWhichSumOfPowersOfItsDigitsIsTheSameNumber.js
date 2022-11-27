function eqSumPowdig(hMax, exp) {
  let array = []
  for (let i=2; i<=hMax; i++) {
    let num = i.toString().split("").reduce((a,c) => a + Math.pow(c,exp),0)
    if (i == num) array.push(i)
  }
  return array
}

// .toString() returns string
// .split() returns array from string
// .reduce() Adds up all elements
// Math.pow() Exponent function
// .push() adds element to end of array
