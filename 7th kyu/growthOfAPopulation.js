function nbYear(p0, percent, aug, p) {
    let year = 0
    while (p0 < p) {
      p0 = p0 * (1+percent/100) + aug
      p0 = Math.floor(p0)
      year++
    }
  return year
}
// While(){}, () if true then break, {} else
// Math.floor() round down
