function getMatrix(number) {
  let arr = Array.from({ length: number }, () => Array(number).fill(0))
  for (let i=0; i<number; i++) {
    for (let j=0; j<number; j++) {
      if (i==j) {
        arr[i][j] = 1
      }
    }
  }
  return arr
} 
