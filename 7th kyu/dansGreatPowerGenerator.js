function danspower(num, power) {
  let n = Math.pow(num,power)
  return n%2==0 ? n : Math.round(n/10) * 10
}
// Math.pow() base raised to exponent
// Math.round() round to nearest
