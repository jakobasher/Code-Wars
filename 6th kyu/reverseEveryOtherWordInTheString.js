function reverse(str){
  return str
    .split(" ")
    .map((e,i) => 
         i%2 !== 0 
         ? e.split("").reverse().join("") 
         : e)
    .join(" ")
    .trim("")
}

// .split() returns array from string
// .map() Fn to each element in array
// .reverse() reverses array index
// .join() returns string from array
// .trim() removes white spaces begin and end
