function dontGiveMeFive(start, end){
  let count = 0
  
  for (let i = start; i <= end; i++) {
    if (!i.toString().includes("5"))
        count++
    }
  
  return count
}

// .toString() integer to string
// .includes() returns true or false
