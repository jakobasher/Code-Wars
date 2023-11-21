function mainDiagonalProduct(mat){
  let num = 1
  for (let i=0; i<mat.length; i++) {
    num *= mat[i][i]
  }
  return num
}
// Try .reduce() next time
