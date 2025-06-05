function minimum(a, x) {
  let remainder = a%x
  if (remainder == 0) return 0

  let add = x - remainder
  let subtract = remainder
  return Math.min(add, subtract)
}
