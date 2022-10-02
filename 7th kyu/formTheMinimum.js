function minValue(values){
  let num = [...new Set(values)].sort().join("")
  return parseInt(num)
}

// ... spread syntax allow iterable objects to be 
// new Set() returns unique elements
// .sort() min to max
// .join() array to string
// .parseInt() string integer to integer
