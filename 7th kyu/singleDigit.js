function singleDigit(n) {
  if (n<10) return n
  let num = n.toString(2).split("").filter(e => e=="1").length
  return num < 10 ? num : singleDigit(num)
}
// While loop less stack
