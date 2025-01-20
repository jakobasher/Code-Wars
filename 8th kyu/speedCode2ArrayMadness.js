function arrayMadness(a, b) {
  let n1 = a.reduce((a,c) => a+c**2,0)
  let n2 = b.reduce((a,c) => a+c**3,0)
  return n1 > n2
}
