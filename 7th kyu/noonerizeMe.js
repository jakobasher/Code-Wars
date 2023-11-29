function noonerize(numbers) {
  if (!numbers.every(e => typeof e == "number")){
    return "invalid array"
  }
  let array = numbers.map(e=>e.toString())
  let n1 = array[1][0]+array[0].slice(1)
  let n2 = array[0][0]+array[1].slice(1)
  return Math.abs(n1 - n2)
}
// .every() if all true return true
// .typeof returns t/f
// Math.abs() returns absolute value
// .slice() returns portion of element
