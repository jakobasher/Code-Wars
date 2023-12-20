function checkDigit(number, index1, index2, digit) {
  let min = Math.min(index1,index2)
  let max = Math.max(index1,index2)
  return number.toString().slice(min,max+1).includes(digit.toString())
}
// Math.max() Math.min() returns max/min of iterible
// .toString() return as string
// .slice() return portion of string
// .includes() returns t/f
