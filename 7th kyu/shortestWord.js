function findShort(s){

  let array = s.split(" ").map(e => e.length)
  return Math.min(...array)
  
  
}

// .split() string to array
// .map() function each element in array
// ... spread syntax
// Math.min() returns lowest value (non array)
