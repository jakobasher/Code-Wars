function cutIt(arr){
  let min = Math.min(...arr.map(e => e.length))
  return arr.map(e => e.slice(0,min))
}
// Math.min() returns min value of iterible
// ... Spread syntax array-like to iterible
// .map() Fn to each element
// .slice() returns portion of element
