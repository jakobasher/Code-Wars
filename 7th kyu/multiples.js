function multiple(x) {
  if (x%3==0 && x%5==0) return "BangBoom"
  if (x%3==0) return "Bang"
  if (x%5==0) return "Boom"
  return "Miss"
}
