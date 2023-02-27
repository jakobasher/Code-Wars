function getNumberOfSquares(n) {
  let count = 0
  let num = 0
  for (let i=1; num<n; i++) {
    num += i*i
    if (num < n) count++
  }
  return count
}
// For loop, if under ++
