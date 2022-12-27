const mutate = (chromosome, p) => {
  if (p == 1) {
    if (chromosome[0] == 0) {
      return chromosome.split("").map(e => e = "1").join("")
    } else {
      return chromosome.split("").map(e => e = "0").join("")
    }
  }
  
  if (p == 0) {
    return chromosome
  }
   
  return chromosome.split("").map(e=>{
    if (e == 0) {
      return p < Math.random() ? 1 : 0
    }
    if (e == 1) {
      return p < Math.random() ? 0 : 1
    }
  })
  
}

// Brute force, lots of ifs, 3 edge cases + 1 main function
// .split() returns array from string
// .map() Fn to each element
// .join() returns string from array
