function pyramid(n) {
  let array = [] 
  for (let i=1; i<n+1; i++){
    let str = ("1").repeat(i).split("").map(Number)
    array.push(str)
  }
  return array
}

// .repeat() repeat string number of times
// .split() string to array
// .map() Fn to each element
// Number return as integer
// .push() add to end of array
