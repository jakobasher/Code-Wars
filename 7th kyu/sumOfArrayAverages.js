const sumAverage = (arr) => {
  let result = arr.map((e,i) => e.reduce((a,c) => a+c, 0) / e.length)
  return Math.floor(result.reduce((a,c)=>a+c,0))
}
// .map() Fn to each element array
// .reduce() add each element in array, in this case
// Math.floor() round down
