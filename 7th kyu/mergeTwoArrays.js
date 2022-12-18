function mergeArrays(a, b) {
  let array = []
  let maxLength = Math.max(a.length, b.length)
  for (let i=0; i<maxLength; i++) {
    if (a[i]) array.push(a[i])
    if (b[i]) array.push(b[i])
  }
  return array
}
// Math.max() returns highest value element
// for() if exist/true then procede
// .push() add element to end of array
