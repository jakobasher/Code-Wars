function trailingZeros(n) {
  let zeroes = 0
  let str = n.toString(2).split("").reverse().join("")
  for (let i=0; i<str.length; i++) {
    if (str[i]=="0") {
      zeroes++
    } else {
      break
    }
  }
  return zeroes
}
