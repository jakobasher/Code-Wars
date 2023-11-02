function allNonConsecutive (arr) {
  let array = []
  for (let i=0; i<arr.length-1; i++) {
    if (arr[i+1] !== arr[i]+1) {
      array.push({i:i+1, n:arr[i+1]})
    }
  }
  return array
}
// .push() add element to end of array, added an object of the position and value at
