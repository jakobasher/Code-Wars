function climb(n){
  let array = []
  for (let i=n; i>0; i=Math.floor(i/2)) {
    array.unshift(i)
  } 
  return array
}
