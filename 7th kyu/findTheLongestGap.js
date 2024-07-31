function gap(num) {
  let str = num.toString(2)
  let n1 = str.indexOf(1)
  let n2 = str.lastIndexOf(1)
  return str.slice(n1,n2+1).split("1").sort((a,b)=>b.length-a.length)[0].length
}
