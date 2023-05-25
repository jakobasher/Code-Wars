function arraySum(arr) {
  return arr.flat(Infinity).filter(Number).reduce((a,c)=>a+c,0)
}
// .flat() opens array, Infinity all 
// .filter() returns numbers from array
// .reduce() adds elements
