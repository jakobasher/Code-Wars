function sumCubes(n){
  return n > 0 ? Math.pow(n,3) + sumCubes(n-1) : 0
}
// Math.pow() base raised to an exponent
// Recursion
