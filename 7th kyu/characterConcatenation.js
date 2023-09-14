function charConcat(string){
  let arr = []
  let str = string.split("")
  for (let i=0; i<=string.length/2-1; i++) {
    arr.push(str[i])
    arr.push(str[str.length-i-1])
    arr.push(i+1)
  }
  return arr.join("")
}
// .split() returns array
// .push() adds element to end of array
// .join() returns string
