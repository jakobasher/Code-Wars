function sameCase(a, b){
  if (!/[a-zA-Z]/.test(a)) return -1
  if (!/[a-zA-Z]/.test(b)) return -1
  if (a.toUpperCase() == a && b.toLowerCase() == b) return 0
  if (a.toLowerCase() == a && b.toUpperCase() == b) return 0
  return 1
}
// Every possible combination
