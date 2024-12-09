function interlockable(a, b) {
  let n1 = a.toString(2).split("").reverse().join("")
  let n2 = b.toString(2).split("").reverse().join("")
  let l = Math.min(n1.length, n2.length) 
  for (let i=0; i<l; i++) {
    if ((n1[i]=="1") && (n2[i]=="1")) {
      return false
    }
  }
  return true
}
