function tripleTrouble(one, two, three){
  let str = ""
  for (let i=0; i<Math.max(one.length,two.length,three.length); i++) {
    str+= one[i]+two[i]+three[i]
  }
  return str
 }
// Math.max() returns highest value of list
