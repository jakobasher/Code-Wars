function findArray(arr1, arr2){
  if (arr1.length == 0) return []
  if (arr2.length == 0) return []
  let array = []
  for (let i=0; i<arr2.length; i++) {
    array.push(arr1[arr2[i]])
  }
  return array
}
// Take care of edge cases, go through arr2 as index of arr1
// .push() add element to end of array
