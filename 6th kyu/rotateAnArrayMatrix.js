function rotate(matrix, direction) {
  let rotated = []
  let rows = matrix.length
  let cols = matrix[0].length

  for (let i = 0; i < cols; i++) {
    rotated.push([]);
  }
  if (direction === "clockwise") {
    for (let i = 0; i < cols; i++) {
      for (let j = rows - 1; j >= 0; j--) {
        rotated[i][rows - j - 1] = matrix[j][i]
      }
    }
  }
  if (direction === "counter-clockwise") {
    for (let i = cols - 1; i >= 0; i--) {
      for (let j = 0; j < rows; j++) {
        rotated[cols - i - 1][j] = matrix[j][i]
      }
    }
  }
  return rotated
}
// /Long way
