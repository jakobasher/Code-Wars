function reverseSlice(str) {
  let arr = []
  for (let i=0; i<str.length; i++) {
    arr.push(str.split('').reverse().join('').slice(i))
  }
  return arr
}
// .push() add to end of array
// .split() return as array
// .reverse() reverse array index
// .join() return as string
// .slice() return portion of string
