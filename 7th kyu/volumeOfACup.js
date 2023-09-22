function cupVolume(d1, d2, height){
  let r1 = d1/2
  let r2 = d2/2
  let v = Math.PI*height*(r2*r2+r1*r1+r1*r2)/3
  return +v.toFixed(2)
}
// V = (1/3) * π * h * (R^2 + r^2 + R * r)
