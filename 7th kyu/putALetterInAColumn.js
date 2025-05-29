function buildRowText(index, character) {
  let str = "||||||||||".split("").join(" ").split("")
  str[index*2+1] = character
  return str.join("")
}
