function roots(a,b,c){
  let d = b*b - 4*a*c
  if (d >= 0) {
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);
    return +(x1 + x2).toFixed(2)
  }
  return null
}
