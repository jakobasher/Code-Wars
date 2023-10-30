function between(a, b) {
  let arr = []
  let n
  for (let i=a; i<=b; i++) {
    n = a++
    arr.push(n)
  }
  return arr
}
// .push() add to end of array
