function gps(s, x) {
  if (x.length <= 1) return 0
  let array = []
  for (let i=0; i<x.length-1; i++) {
    array.push(((x[i+1] - x[i]) * 3600) / s)
  }
  return Math.max(...array)
}
