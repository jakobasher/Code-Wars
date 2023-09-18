function factors(x){
  if (!Number.isInteger(x)) return -1
  if (x==0) return -1
  let arr = []
  for (let i=1; i<=x; i++) {
    if (x%i==0) {
      arr.push(i)
    }
  }
  return arr.reverse()
}
// Number.isInteger() returns t/f
// .push() adds to end of array
// .reverse() reverse array index
