function startingMark(bodyHeight){
  let m = (10.67-9.45)/(1.83-1.52)
  let b = 3.468
  let y = m*bodyHeight + b;
  return Math.round(y * 100) / 100
}
