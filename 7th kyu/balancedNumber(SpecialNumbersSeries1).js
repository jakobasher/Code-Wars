function balancedNum(number){
  let array = number.toString().split("").map(Number)
//   if (array.length <= 2) return "Balanced"
  let leftSide = 0
  let rightSide = 0
  for (let i=0; i< array.length/2-1; i++) {
    leftSide += array[i]
    rightSide += array[array.length-i-1]
  }
  return leftSide == rightSide ? "Balanced" : "Not Balanced"
}
// .toString() return as string
// .split() return as array
// .map() Fn convert to numbers in this case
