function consecutive(arr) {
  let min = Math.min(...arr)
  let max = Math.max(...arr)
  let num = (max-min) + 1 - arr.length 
  return arr.length > 1 ? num : 0
}

// Math.min() returns min
// Math.max() returns max
// ... spread syntax
