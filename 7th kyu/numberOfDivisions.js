const divisions = (n, divisor) => {
  let count = 0
  while (n >= divisor) {
    count++
    n = Math.floor(n/divisor)
  }
  return count
}
// Math.floor() round down
