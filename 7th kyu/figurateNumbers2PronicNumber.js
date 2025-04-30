function isPronic(n){
  let x = Math.floor(Math.sqrt(n))
  return x * (x+1) == n
}
