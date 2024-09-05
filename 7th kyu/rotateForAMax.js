function maxRot(n) {
  let array = [n]
  let str = n.toString()
  for (var i=0; i<str.length; i++) {
    str = str.slice(0,i) + str.slice(i+1) + str[i]
    array.push(str.split().join())
  } 
  return Math.max(...array)
}
