function drawACross(n) {
  if (n<3) {
    return "Not possible to draw cross for grids less than 3x3!"
  }
  if (n%2 == 0) {
    return "Centered cross not possible!";
  }

  let grid = []
  for (let i=0; i<n; i++) {
    let row = Array(n).fill(' ')
    row[i] = 'x'
    row[n-1-i] = 'x'
    grid.push(row.join(''))
  }

  return grid.join('\n')
}
