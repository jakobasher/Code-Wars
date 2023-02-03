function equableTriangle(a,b,c) {
  let perimeter = a+b+c
  let s = (a+b+c)/2
  let area = Math.sqrt(s*(s-a)*(s-b)*(s-c))
  return  perimeter == area
}
// Math.sqrt() returns square root value
