function mergeArrays(arr1, arr2) {
  return Array.from(new Set([...arr1,...arr2].sort((a,b)=>a-b)))
}
// Array.from() returns array from array-like or object
// new Set() returns unique iterible list
// ... spread syntax array to iterible list
// .sort() sorts in ascending, in this case
