var lengthOfSequence = function (arr, n) {
  return arr.filter(e => e==n).length == 2 ? arr.lastIndexOf(n) - arr.indexOf(n) + 1 : 0
}
