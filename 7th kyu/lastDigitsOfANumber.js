function lastDigit(n, d) {
  if (d<=0) return []
  return n.toString().slice(-d).split("").map(Number)
}
// .toString() return as string
// .slice() remove last element of string, in this case
// .split() return as array
// .map() Number every element to integer
