function firstNonRepeatingLetter(s) {
  let array = s.toLowerCase()
  let count = {}
  let letter
  
  for (let e of array) {
    count[e] = (count[e] || 0) + 1
  }
  
  for (let e in count){
    if (count[e] == 1){
      letter = e; 
      break
    }
  }
  
  let idx = Object.values(count).indexOf(1)
  return idx > -1 
    ? s.includes(letter) 
      ? letter 
      : letter.toUpperCase() 
    : ""
  }

// for of loop to create object count
// for in loop to iterate through object
// .toLowerCase() returns lower case
// Object.values() returns values of object as an array
// .indexOf() finds first index of array
// .includes() returns true or false if exist
