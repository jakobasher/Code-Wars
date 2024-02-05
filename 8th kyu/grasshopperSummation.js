var summation = function (num) {
  return num > 1 ? num + summation(num-1) : 1
}
// Recursive method
