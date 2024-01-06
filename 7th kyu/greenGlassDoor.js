function stepThroughWith(s) {
  let letter = s[0]
  for (let i=1; i<s.length; i++) {
    if (s[i] == letter) {
      return true
    } else {
      letter = s[i]
    }
  }
  return false
}
// If prev equals current returns true else 
