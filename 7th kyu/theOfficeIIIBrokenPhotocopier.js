function broken(x){
  return x.split("").map(e => e=="1" ? "0" : "1").join("")
}
// .split() return array from string
// .map() Fn to convert with ternary
// .join() return string from array
