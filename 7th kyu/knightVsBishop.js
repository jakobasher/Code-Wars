function knightVsBishop(knightPosition, bishopPosition) {
  let knight = [knightPosition[0], knightPosition[1].charCodeAt()-64]
  let bishop = [bishopPosition[0], bishopPosition[1].charCodeAt()-64]
  let array = [Math.abs(knight[0] - bishop[0]), Math.abs(knight[1] - bishop[1])]
  console.log(array)
  if (array[0]-array[1] == 0) return "Bishop"
  if (array.includes(1) && array.includes(2)) return "Knight"
  return "None"
}
