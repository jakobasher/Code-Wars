function isVow(a) {
  let arr = [97, 101, 105, 111, 117]
  return a.map((e) => arr.includes(e) ? String.fromCharCode(e) : e)
}
// .map() Fn to each element
// .includes() returns t/f
// String.fromCharCode() return as ASCII
