function alan(x){
  let arr = ["Rejection","Disappointment","Backstabbing Central","Shattered Dreams Parkway"]
  return arr.every(e => x.includes(e)) 
    ? "Smell my cheese you mother!"
    : "No, seriously, run. You will miss it."
  }
// .every() returns true if all true else returns false
// .includes() returns t/f
// Array is checked if every value is found in array list
