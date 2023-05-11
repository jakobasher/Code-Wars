function doubles(s) {
  let result = '';
  for (let i = 0; i < s.length; i++) {
    s[i] !== s[i+1] ? result += s[i] : i++
  }
  return s == result ? result : doubles(result)
}
// Create empty string to filter out double letters
// Recursion incase new string has new doubles
