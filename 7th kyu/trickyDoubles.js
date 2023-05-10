function trickyDoubles(n){
  let str = n.toString()
  let l = Math.floor(str.length / 2)
  
  for (let i = 2; i <= l; i++) {
    let num = str.slice(0, i)
    if (str === num+num) {
      return n
    }
  }
  return n*2
}
/// .toString() return as string
// Math.floor() round down
// .slice() return portion of string
