function roundIt(n){
  let arr = n.toString().split(".")
  return arr[0].length < arr[1].length ? Math.ceil(n) 
    : arr[0].length > arr[1].length ? Math.floor(n)
    : Math.round(n)
}
// .toString() return as string
// .split() return as array
// Math.ceil() return integer rounded up
// Math.floor() return integer rounded down
// Math.round() return integer rounded to nearest
