function solve(arr) {
  return [...new Set(arr.reverse())].reverse()
}
// ... spread syntax
// new Set() returns unqiue values
// .reverse() used to get last index, reverse again to get original order
