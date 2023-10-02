function mergeArrays(a, b) {
  return Array.from(new Set([...a,...b])).sort((a,b)=>a-b)
}
// Array.from() makes array from array-like or iterible object
// new Set() returns unique values
// ... spready syntax from array to iterible
// .sort() sorts from lowest to greatest, in this case
