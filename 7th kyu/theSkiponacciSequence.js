function skiponacci(n) {
  let array = [0,1]
  for (let i=1; i<n; i++) {
    array.push(array[i-1]+array[i])
  }
  return array.map((e,i)=>i%2==0? "skip": e).slice(1).join(" ")
}
