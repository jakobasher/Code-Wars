function findDifference(a, b) {
  let n = a.reduce((a,c)=>a*c,1)-b.reduce((a,c)=>a*c,1)
  return Math.abs(n)
}
// .reduce() multiply array indexes, in this case
// Math.abs() returns absolute
