function sumMul(n,m){
  if (m<=0) return "INVALID"
  let num = 0
  for (let i=0; i<m; i+=n) {
    num += i
  }
  return num
}
