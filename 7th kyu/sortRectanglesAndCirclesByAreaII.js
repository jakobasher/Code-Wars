function sortByArea(array) {
  return [...array].sort((a,b) => (Array.isArray(a) ? a[0]*a[1] : Math.PI*a*a) - (Array.isArray(b) ? b[0]*b[1] : Math.PI*b*b))
}
// ... spread syntax array like to array
// Array.isArray() returns t/f if array
// Can also use typeof == "number"
