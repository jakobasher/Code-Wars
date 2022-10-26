function squares(x, n) {
  let num = x
  let arr = []
  for (let i = 0; i<n; i++){
    arr.push(num)
    num = Math.pow(num,2)
  }
  return arr
}

// .push() add element to end of array
// Math.pow() raised to the power of
