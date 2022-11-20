function findEvenIndex(arr){
  let idx
  for (let i = 0; i<arr.length; i++) {
    let left = arr.slice(0,i).reduce((a,c) => a+c, 0)
    let right = arr.slice(i+1).reduce((a,c) => a+c, 0)
    if (left == right) {
      idx = i
    }
  }
  return idx >= 0 ? idx : -1
}
// .slice() returns copy of array from starting point, stopping before end point
// .reduce() adds up all elements
