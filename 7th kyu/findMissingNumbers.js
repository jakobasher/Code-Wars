function findMissingNumbers(arr){
  let missing = []
  let start = arr[0]
  let end = arr[arr.length-1]
  for (let i=start; i<end; i++) {
    if (!arr.includes(i)) missing.push(i)
  }
  return missing
}
// .includes() returns t/f
// .push() adds to end of array
