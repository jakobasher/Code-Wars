function disariumNumber(n){
  let num = n.toString().split("").map((e,i)=>Math.pow(+e,i+1)).reduce((a,c)=>a+c,0)
  return num == n ? "Disarium !!" : "Not !!"
}
// .toString() return as string
// .split() return as array
// .map() Fn to convert to numbers to be raised to the power of index+1
