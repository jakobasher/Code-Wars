function minimumPercentage(foods) {
  let sum = foods.reduce((a, b) => a+b, 0)
  let n = foods.length
  return Math.max(0,sum - (n-1)*100)
}
