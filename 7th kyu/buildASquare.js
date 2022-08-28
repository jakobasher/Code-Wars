function generateShape(integer) {
  
  let row = "+".repeat(integer)+"\n"
  return row.repeat(integer).trim()
  
  
}

// .repeat() returns string with a number of copies
// .trim() removes white space at begining and end
// "\n" new line
