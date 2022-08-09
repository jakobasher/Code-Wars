function hasUniqueChars(str){

console.log(new Set(str)) // returns object set unique elements
console.log(new Set(str).size) // returns number
return new Set(str).size == str.length
  
  
}

// new Set() Constructor stores unique elements
// .size set property returns integer
