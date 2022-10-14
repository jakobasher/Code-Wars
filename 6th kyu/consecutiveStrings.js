function longestConsec(strarr, k) {
  let str = "" 
  for (let i=0; k>0 && (i+k)<strarr.length+1; i++) {
    let word = strarr.slice(i,i+k).join("")
    if (word.length > str.length) {
      str = word
    }
  }
  return str
}

// .slice() returns portion between array
// .join() returns string from array
