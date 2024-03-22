function holidayCount (a1, a2){
  let n1 = a1.filter(Number)[0]
  let n2 = a2.filter(Number)[0]
  if (n1 == undefined) return "Not possible"
  return n1 > n2 ? "Right" : n1 == n2 ? "Same" : "Wrong"
}
