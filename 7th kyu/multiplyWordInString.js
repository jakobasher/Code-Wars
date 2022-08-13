function modifyMultiply (str,loc,num) {
  
return (str.split(" ")[loc]+"-").repeat(num).slice(0,-1)
  
  
} 

// .split() string to array
// .repeat() string to repeated stringe
// .slice() returns substring, try .trim()
