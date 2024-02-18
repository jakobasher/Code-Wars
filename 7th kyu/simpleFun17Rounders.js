function rounders(value) {
  return value < 10 ? value : 10 * rounders(Math.round(value/10)) 
}
// Recursive method, base value times 10 every recursion
