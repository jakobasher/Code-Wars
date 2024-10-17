function euclideanDistance(point1, point2){
  let sum = 0
  for (let i=0; i<point1.length; i++) {
    sum += (point1[i] - point2[i]) ** 2
  }
  return +Math.sqrt(sum).toFixed(2)  
}
