function cleanedCounts(data) {
  let num = 0
  return data.map(e => num = Math.max(e,num))
}
// .map() returns new element in place
// Math.max() returns max value of arguments
