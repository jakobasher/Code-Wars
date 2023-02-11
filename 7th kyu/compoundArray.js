function compoundArray(a, b) {
  let len = Math.max(a.length, b.length)
  let arr = []
  for (let i=0; i<len; i++) {
    arr.push(a[i])
    arr.push(b[i])
  }
  return arr.filter(e=> e!==undefined)
}
// Math.max() returns max value
// .push() add element to end of array
// .filter() returns copy of array
