function matrixAddition(a, b){
  for (let i=0; i<a.length; i++) {
    for (let j=0; j<b.length; j++) {
      a[i][j] = a[i][j] + b[i][j]
    }
  }
  return a
}
