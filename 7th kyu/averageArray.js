function avgArray(arr) {
  let results = []
  for (let i=0; i<arr[0].length; i++) {
    let sum = 0
    for (let j=0; j<arr.length; j++) {
      sum += arr[j][i]
    }
    results.push(sum)
  }
  return results.map(e => e/arr.length)
}
// .push() add to end of array
// .map() Fn to each element
