function estSubsets(arr) {
  return Math.pow(2,[...new Set(arr)].length)-1 
}
// Math.pow() base raised to an exponent
// [...] Spread syntax, spreads objects out contained in array
// new Set() returns unique elements in array
// "ESTIMATING" the question asked, which means there is likely an equation to solve this and not to brute force it
