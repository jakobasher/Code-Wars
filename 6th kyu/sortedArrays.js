function nthSmallest(...arrays) {
  let n = arrays.pop()
  let arr = arrays.flat(Infinity).sort((a,b)=>a-b) 
  return arr[n-1]
}
// .pop() removes last element from array, mutates array
// .flat() opens array, Infinity all elements of arrays in this case
// .sort() a-b ascending order
