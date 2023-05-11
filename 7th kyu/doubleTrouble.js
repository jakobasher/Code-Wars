function trouble(x, t){
  let i=0
  while (i<x.length) {
    x[i] + x[i+1] == t ? x.splice(i+1,1) : i++
  }
  return x
}
// while loop, continue until false
// .splice() removes index element, 1 element, in this case
