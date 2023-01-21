function heron(a, b, c) {
  let s = (a+b+c)/2
  let num = Math.sqrt(s*(s-a)*(s-b)*(s-c))
  return num
}
// Math.sqrt() returns square root
