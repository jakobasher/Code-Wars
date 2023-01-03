function freqSeq(str, sep) {
  let count = {}
  str.split("").map(e => count[e] = (count[e] || 0) + 1)
  return str.split("").map(e => count[e]).join(sep)
}
// {} create an obj sort letter by count
// .split() returns array from string
// .map() Fn to each element in array
// .join() returns string from array

// string is split, each letter is added to a count, count++ or is created if does not exist +1
// Each element is replaced by the value of the key
