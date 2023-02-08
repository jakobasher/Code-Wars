function sumOfMinimums(arr) {
  return arr
    .map(e => Math.min(...e))
    .reduce((a,c) => a+c, 0)
}
// .map() Fn to each element
// Math.min() returns lowest iterible number
// ... spread syntax, array to iterible numbers, in this case
// .reduce() adds elements, in this case
