function firstNSmallest(arr, n) {
  return arr
    .map((e,i) => ({e,i}))
    .sort((a,b) => a.e - b.e || a.i - b.i)
    .slice(0,n)
    .sort((a,b) => a.i - b.i)
    .map(o => o.e)
}
// .map() Fn each element, convert each element to object value:index
// .sort() sort by value else by index
// .slice() returns portion of array
// .sort() again sort by index
// .map() return value from object
