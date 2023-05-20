function powersOfTwo(n){
  let arr = [1]
  for (let i=0; i<n; i++) {
    arr.push(Math.pow(2,i+1))
  }
  return arr
}
// .push() add element to end of array
// Math.pow() base rased to exponent
// [1] starter array since n>=0
