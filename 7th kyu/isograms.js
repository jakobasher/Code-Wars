function isIsogram(str){
  
  return [...new Set(str.toLowerCase().split(""))].length == str.length
  
}

// new Set() returns all unique values
// .toLowerCase() 
// .split() string to array
