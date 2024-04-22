function sortVowels(s) {
  if (typeof s !== 'string') return ""
  let str = ""
  for (let i = 0; i < s.length; i++) {
    if ("aeiouAEIOU".includes(s[i])) {
      str += "|" + s[i] + "\n"
    } else {
      str += s[i] + "|\n"
    }
  }
  return str.trim()
}
