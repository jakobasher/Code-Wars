function differenceOfSquares(n){
  let n1 = 0
  let n2 = 0
  for (let i=1; i<=n; i++) {
    n1 += i*i
  }
  for (let i=1; i<=n; i++) {
    n2 += i
  }
  return Math.abs(n1-n2*n2)
}
// Math.abs() returns absolute value
