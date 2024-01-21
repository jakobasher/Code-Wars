function gimmeTheLetters(sp) {
  let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let start = str.indexOf(sp[0])
  let end = str.indexOf(sp[2])
  return str.slice(start,end+1)
}
// .indexOf() returns first index of
// .slice() returns portion of string
