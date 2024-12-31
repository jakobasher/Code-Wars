function initials(n){
  let array = n
    .split(" ")
    .map(e => e[0].toUpperCase() + e.toLowerCase().slice(1))
  let str = ""
  for (let i=0; i<array.length-1; i++) {
    str += array[i][0] + "."
  }
  return str+array[array.length-1]
}
