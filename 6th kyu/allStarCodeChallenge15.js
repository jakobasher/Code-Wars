function rotate(str){
  let arr = []
  for (let i=0; i<str.length; i++) {
    arr.unshift(str)
    str = str[str.length-1] + str.slice(0,str.length-1)
  }
  return arr
}
// .unshift() add element to beginning of array
// .slice() returns a portion of string
// add last letter of string to the string that has been sliced at the end
