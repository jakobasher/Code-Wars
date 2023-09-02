function strong(n) {
  let number = n
    .toString()
    .split("")
    .map(e => factorial(+e))
    .reduce((a,c) => a+c, 0)
  return number == n ? "STRONG!!!!" : "Not Strong !!"
  }

function factorial(num) {
  if (num == 0 || num == 1) {
    return 1
  } else {
    return num * factorial(num - 1)
  }
}
// .toString() convert number to string to separate
// .split() returns array from string
// .map() Fn to function factorial, returns factorial value
// .reduce() adds each element, in this case
