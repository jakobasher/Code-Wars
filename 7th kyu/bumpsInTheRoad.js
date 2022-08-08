function bump(x){
  
  let count = x.split("").filter(e => e=="n").length
  return count <= 15 ? "Woohoo!" : "Car Dead"
  
  
}

// .split() string to array
// .filter() function each element
