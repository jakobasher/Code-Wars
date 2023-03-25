function addLength(str) {
  return str.split(" ").map(e => `${e} ${e.length}`)
}
// `` Template Literals creates template strings
// Used `` instead of triple + to shorten
