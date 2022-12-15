function isNice(arr){
  return arr.length > 1 
    ? arr.every(e => arr.includes(e+1) || arr.includes(e-1))
    : false
}
// .every() checks every element in the array against a function, returns true if all cases true
// .includes() checks ALL element in array against function, returns true if any matches, false if no matches
// || checks one up and one down
