function countzero(s) {
  let n = (s.match(/\(\)/g) || []).length
  let num = 0
  for (let i=0; i<s.length; i++) {
    if ("abdegopq069DOPQR".includes(s[i])) {
      num += 1
    } else if ("%&B8".includes(s[i])) {
      num += 2
    }
  }
  return num + n
}
// .match() returns matching results
// .includes() returns t/f
