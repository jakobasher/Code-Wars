function howManySmaller(arr,n){
  return arr
    .map(e => e.toFixed(2))
    .filter(e => e<n)
    .length
}
// Can try filter and toFixed together next time
