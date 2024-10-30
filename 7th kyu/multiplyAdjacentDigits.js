function digitMultiplication(expr) {
  let parts = expr.split(/([+-])/)
  let array = []

  for (let part of parts) {
    if (part == '+' || part == '-') {
      array.push(part);
    } else if (part) {
      let product = part.split("").reduce((a, c) => a * +c, 1)
      array.push(product)
    }
  }
  
  let num = array[0]
  for (let i=1; i<array.length; i+=2) {
    let operator = array[i]
    let value = array[i+1]

    if (operator == '+') {
      num += value
    } else if (operator == '-') {
      num -= value
    }
  }
  
  return num
}
