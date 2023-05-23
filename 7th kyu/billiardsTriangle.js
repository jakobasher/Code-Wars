function pyramid(balls) {
  let level = 0
  let totalBalls = 1
  while (totalBalls <= balls) {
    level++
    totalBalls = (level * (level + 1)) / 2
  }
  return level-1
}
// while loop, while true else break
