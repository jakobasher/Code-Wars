function sequence(x) {
  return Array.from({ length: x }, (_, i) => (i + 1)).sort()
}
