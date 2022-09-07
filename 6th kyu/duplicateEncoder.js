function duplicateEncode(word){
  let count = {}
  let letters = word.toLowerCase().split("")
  letters.forEach(e => count[e] = (count[e] || 0 ) +1)  

  return letters.map(e => count[e] == 1 ? "(" : ")").join("")
}

// .toLowerCase() lower case
// .split() string to array
// .forEach() iterates over array elements, returns same array
// .map() iterates over array elements, returns new array
// .join() array to string
