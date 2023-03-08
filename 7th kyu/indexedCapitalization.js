function capitalize(s,arr){
  return s
    .split("")
    .map( (e,i) => arr.includes(i) 
         ? e.toUpperCase() 
         : e
        )
    .join("")
}
// .split() returns array from string
// .join(") returns string from array
// .map() Fn to each element in array
// .includes() returns t/f, if true uppercase
