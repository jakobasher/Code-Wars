function distanceBetweenPoints(a,b){
  let x = a.x-b.x
  let y = a.y-b.y
  let z = a.z-b.z
  return Math.sqrt(x*x + y*y + z*z)
}
