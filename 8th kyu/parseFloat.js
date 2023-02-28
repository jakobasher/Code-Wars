function parseF(s) {
  return Number.isNaN(parseFloat(s)) ? null : parseFloat(s);
}
// Number.isNaN() returns t/f
// parseFloat() Returns number if possible or NaN
