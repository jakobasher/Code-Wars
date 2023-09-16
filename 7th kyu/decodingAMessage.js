function decode(message){
  let arr = "abcdefghijklmnopqrstuvwxyz".split("")
  let rev = "abcdefghijklmnopqrstuvwxyz".split("").reverse()
  let str = ""
  for (let i=0; i<message.length; i++) {
    if (message[i]==" ") {
      str += " "
    } else { 
      let idx = arr.indexOf(message[i])
      str += rev[idx]
    }
  }
  return str
}
// .split() return as array
// .reverse() reverses array index
// .indexOf() returns index of first case
