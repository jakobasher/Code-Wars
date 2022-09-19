function dotCalculator (equation) {
  let first = equation.split(" ")[0]
  let operator = equation.split(" ")[1]
  let second = equation.split(" ")[2]
  let obj = {
    "+": (a,b) => a + b,
    "-": (a,b) => a - b,
    "*": (a,b) => a * b,
    "//": (a,b) => a / b
  }
  return (".").repeat(obj[operator](first.length,second.length))
}

// .split() string to array
