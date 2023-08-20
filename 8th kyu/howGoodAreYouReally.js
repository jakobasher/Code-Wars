function betterThanAverage(classPoints, yourPoints) {
  return yourPoints > classPoints.reduce((a,c)=>a+c,0) / classPoints.length
}
// .reduce() adds all elements in array, in this case
