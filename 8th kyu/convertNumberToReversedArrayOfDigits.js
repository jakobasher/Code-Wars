function digitize(n) {
  return n.toString().split("").reverse().map(Number)
}
// .toString() return string from integer
// .split() return array from string
// .reverse() reverse array index
// .map() convert element to integer, in this case
