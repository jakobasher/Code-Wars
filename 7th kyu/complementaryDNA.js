function DNAStrand(dna){
  
  let dnaObj = {"A":"T", "T":"A", "G":"C", "C":"G"}
  return dna.split("").map(e => dnaObj[e]).join("")

  
}

// .split() string to array
// .map() function each element
// .join() array to string
// Objects
