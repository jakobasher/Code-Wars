function digitDegree(n) {
  let count = 0
  while (n.toString().length !== 1) {
    n = n.toString().split("").map(Number).reduce((a,c)=>a+c,0).toString()
    count++
  }
  return count
}
// .toString() return as string
// .split() return as array
// .map() Fn, return element as a number
// .reduce() add elements in array
