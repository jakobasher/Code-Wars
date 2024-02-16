function slope(points){
  let [x1,y1,x2,y2] = points
  let x = x1-x2
  let y = y1-y2
  return x == 0 ? "undefined" : (y/x).toString()
}
// .toString() return as string
