function digPow(n, p) {
  let arr = n.toString().split("").map(Number)
  let sum = 0
  for (let i=0; i<arr.length; i++) {
    sum += Math.pow(arr[i], p)
    p++
  }
  return sum%n == 0 ? sum/n : -1
}
// .toString() return string from Number
// .split() return array from string
// .map() Fn each element to integer
// Math.pow() base raised to exposnent
// If % returns 0, then return muliplier, else -1
