function distinctDigitYear(year) {
  for (let i=year+1; i<9000; i++) {
    let num = [...new Set(i.toString().split(""))].length
    if (i.toString().length == num) return i
  }
}
// ... spread syntax
// .toString() return as string
// .split() return as array
// If unique elements = 4
