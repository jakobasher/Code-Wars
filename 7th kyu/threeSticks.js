function maxlen(l1, l2) {
  let [x,y] = [Math.min(l1,l2), Math.max(l1,l2)]
  // if (x == y) return x/2
  if (x*3 <= y) return y/3
  if (x*2 <= y) return x
  return y/2
}
