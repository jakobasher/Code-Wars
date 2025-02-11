function anyOdd(x) {
  return (x & 0xAAAAAAAA) !== 0 ? 1 : 0
}
