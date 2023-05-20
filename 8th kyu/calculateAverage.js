function findAverage(array) {
  return array.length == 0 ? 0 : array.reduce((a,c)=>a+c,0)/(array.length)
}
// .reduce() adds all elements, int his case
// Emptry arrays return 0 else average
