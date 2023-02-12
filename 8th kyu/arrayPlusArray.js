function arrayPlusArray(arr1, arr2) {
  return [arr1,arr2].flat(1).reduce((a,c)=>a+c,0)
}
// .flat() opens array to nth degree
// .reduce() adds elements in array
