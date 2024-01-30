function factorial(n){
  if (n < 0) throw new RangeError
  if (n > 12) throw new RangeError
  return n>1 ? n*factorial(n-1) : 1
}
// Recursive
// Same name as another one
