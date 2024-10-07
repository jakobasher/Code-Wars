function distanceBetweenPoints(a, b) {
  let x = a.x - b.x
  let y = a.y - b.y
  return Math.hypot(x, y)
}
