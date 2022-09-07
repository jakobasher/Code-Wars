function deepCount(a){
  return a.reduce((a,c) => a + (Array.isArray(c) ? deepCount(c) : 0), a.length) 
}

// .reduce() sum up elements in array
// Array.isArray() returns true or false
