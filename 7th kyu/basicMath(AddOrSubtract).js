function calculate(str) {
  let s = str.replaceAll("plus","+").replaceAll("minus","-")
  return eval(s).toString()
}
// .replaceAll() replace all occurance of with
// eval() evaluates a string
// .toString() return as string
