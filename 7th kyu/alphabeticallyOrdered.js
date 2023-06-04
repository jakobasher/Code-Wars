function alphabetic(s) {
  for (let i=0; i<s.length - 1; i++) {
    if (s[i] > s[i+1]) {
      return false
    }
  }
  return true
}
// Letters can be sorted and compared based on Unicode value
