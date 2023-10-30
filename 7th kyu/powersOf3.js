function largestPower(n){
  let num = 0
  while (Math.pow(3,num) < n) {
    num++
  }
  return num-1
}
// Math.pow() base raised to exponent
