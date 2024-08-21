function createArrayOfTiers(num) {
  let str = num.toString()
  let arr = []
  for (let i=0; i<str.length; i++) {
    arr.push(str.slice(0,i+1))
  }
  return arr
}
