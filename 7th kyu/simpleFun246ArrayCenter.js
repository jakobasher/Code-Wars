function arrayCenter(a) {
  let min = Math.min(...a)
  let avg = a.reduce((a,c)=>a+c,0) / a.length
  return a.filter(e => Math.abs(e-avg) < min)
}
// Math.min() returns lowest of iterible
// ... spread syntax array to iterible
// .reduce() adds all elements, in this case
// .filter() returns portion of array
// Math.abs() returns absolute value
