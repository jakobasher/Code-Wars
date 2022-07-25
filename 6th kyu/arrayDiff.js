function arrayDiff(a, b) {
  
return a.filter(e => b.indexOf(e) == -1)

}

// .filter() returns new array based on
// .indexOf() returns first index if found
