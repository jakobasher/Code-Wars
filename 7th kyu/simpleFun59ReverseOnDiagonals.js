function reverseOnDiagonals(matrix) {
  for (let i=0, j = matrix.length-1; i < matrix.length/2; i++, j--) {
    [matrix[i][i], matrix[j][j]] = [matrix[j][j], matrix[i][i]];
    [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
  }
  return matrix
}
