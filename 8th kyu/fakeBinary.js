function fakeBin(x){
  return x.split("").map((e)=> e < 5 ? 0 : 1).join("")
}
// .split() return as array
// .map() Fn to array elements
// .join() return as string
