function sortIt(arr) {
  return arr.slice().sort((a, b) => {
    let countA = arr.filter(v => v == a).length
    let countB = arr.filter(v => v == b).length
    if (countA == countB) {
      return b - a
    }
    return (countA > countB) ? 1 : -1
  })
}
// .slice() make copy of array so original not modified
// .filter() returns true values
// line 8, 1 for ascending -1 for descending
