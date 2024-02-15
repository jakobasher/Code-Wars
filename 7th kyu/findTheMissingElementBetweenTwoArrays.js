function findMissing(arr1, arr2) {
  arr1.sort((a,b)=>a-b)
  arr2.sort((a,b)=>a-b)
  let l = Math.max(arr1.length, arr2.length)
  for (let i=0; i<l; i++) {
    if (arr1[i] !== arr2[i]) {
      return arr1.length > arr2.length ? arr1[i] : arr2[i]
    }
  }
  return arr1.length == l ? arr1[l.length-1] : arr2[l.length-1]
}
// Loop through each until no match, return longer, else return last of longer
