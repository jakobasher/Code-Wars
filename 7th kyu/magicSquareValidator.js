function isMagical(square){
  if (square[0] == square[1]) return false
  if (square[0]+square[1]+square[2] !==15) return false
  if (square[3]+square[4]+square[5] !==15) return false
  if (square[6]+square[7]+square[8] !==15) return false
  if (square[0]+square[3]+square[6] !==15) return false
  if (square[1]+square[4]+square[7] !==15) return false
  if (square[2]+square[5]+square[8] !==15) return false
  if (square[0]+square[4]+square[8] !==15) return false
  if (square[2]+square[4]+square[6] !==15) return false
  return true
}
// Brute force? check every combination + one edge case
