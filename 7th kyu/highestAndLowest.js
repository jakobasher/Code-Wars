function highAndLow(numbers){
  let arr = numbers.split(" ").map(Number)
  let min = Math.min(...arr)
  let max = Math.max(...arr)
  
  return `${max} ${min}`
  
}

// .split() string to strings in array
// .map() creates new array with function
// Number string to integer
// ... Spread Syntax 
// `` and ${} template literals 
