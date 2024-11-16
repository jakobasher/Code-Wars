function calculateProbability(n){
  let num = 1
  for (let i=0; i<n; i++) {
    num *= (365 - i) / 365
  }
  return (1 - num).toFixed(2)
}
