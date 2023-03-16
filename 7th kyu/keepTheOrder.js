function keepOrder(ary, val) {
  for (let i=0; i<ary.length; i++) {
    if (val <= ary[i]) return i
  }
  return ary.length
}
// If value at array is =< return i
