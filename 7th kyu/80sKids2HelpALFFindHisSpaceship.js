function findSpaceship(map) {
  if (typeof map !== 'string') return "Spaceship lost forever.";

  let rows = map.split('\n')
  let totalRows = rows.length

  for (let rowIndex = 0; rowIndex < totalRows; rowIndex++) {
    let colIndex = rows[rowIndex].indexOf('X');
    if (colIndex !== -1) {
      let x = colIndex
      let y = totalRows - 1 - rowIndex
      return [x, y]
    }
  }
  return "Spaceship lost forever."
}
