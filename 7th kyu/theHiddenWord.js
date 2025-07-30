function hiddenWord(num) {
  let obj = {
    "a" : 6,
    "b" : 1,
    "d" : 7,
    "e" : 4,
    "i" : 3,
    "l" : 2,
    "m" : 9,
    "n" : 8,
    "o" : 0,
    "t" : 5,
  }

  return num
    .toString()
    .split("")
    .map(e => Object.keys(obj).find(key => obj[key] == e))
    .join("")
}
