function tidyNumber(n){
  let array = n.toString().split("").map(Number)
  let sorted = n.toString().split("").map(Number).sort((a,b)=>a-b)
  return JSON.stringify(array) === JSON.stringify(sorted);
}

// .toString() integer to string
// .split() string to array
// .map() mod each element
// Number return as integer
// JSON.stringify() convert to JSON string to compare
