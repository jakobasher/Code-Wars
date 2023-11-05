function divisibleCount(x, y, k) {
  let min = Math.ceil(x/k)
  let max = Math.floor(y/k)
  return max - min + 1
}
///
