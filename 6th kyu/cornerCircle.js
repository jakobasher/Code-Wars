function cornerCircle(r) {
  let num = r*(Math.SQRT2-1)*(Math.SQRT2-1)
  return +num.toFixed(2)
}

// Math.SQRT2 returns the square root of 2
// .toFixed() numbers that appear after decimal
// +(var) returns as integer
