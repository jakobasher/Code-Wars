function mergeStrings(first, second){
  if (first==second) return first
  let num = 0
  let shortest = Math.min(first.length,second.length)
  for (let i=1; i<shortest; i++) {
    num = first.slice(-i) == second.slice(0,i) 
      ? i 
      : num  
  }
  return first+second.slice(num)
}
// Math.min() returns lowest value of iterible list
// .slice() removes portion of array, if end of first and begining of second match, updates
// Ternary is a can be done differently but it works
