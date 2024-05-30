function solve(a, b) {
  let count = 0
  for (let i = a; i<b; i++) {
    if (isEviternityNumber(i.toString())) {
      count++
    }
  }
  return count
}

function isEviternityNumber(numStr) {
  let count8 = 0, count5 = 0, count3 = 0
  for (let char of numStr) {
    if (char == '8') count8++
      else if (char == '5') count5++
      else if (char == '3') count3++
      else return false
    }
  return count8 >= count5 && count5 >= count3
}
