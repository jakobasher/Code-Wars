function expressionMatter(a, b, c) {
  return Math.max(
    a*b*c,
    a+b+c,
    a*b+c,
    a+b*c,
    a*(b+c),
    (a+b)*c
  )
}
// Math.max() return highest value from list
// Every combination
