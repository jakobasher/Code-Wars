function SeriesSum(n){
  let i, sum = 0
  for (i=0; i<n; i++){
    sum += 1 / (1 + i*3)
  }
  return sum.toFixed(2)
}

// .toFixed() returns up to decimal points
