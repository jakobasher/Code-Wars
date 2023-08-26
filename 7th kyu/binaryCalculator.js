function calculate(n1, n2, o) {
  let num1 = parseInt(n1,2)
  let num2 = parseInt(n2,2)
  let ans
  if (o=="add") ans = num1+num2
  if (o=="subtract") ans = num1-num2
  if (o=="multiply") ans = num1*num2
  return ans.toString(2)
}
// parseInt() return as int
// .toString() return as string, binary in this case
