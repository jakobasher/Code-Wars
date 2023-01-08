function moreZeros(s){
  let arr = s
    .split("")
    .map(e => e.charCodeAt().toString(2).split("").filter(el=>el==0).length > 3
          ? e
          : ""
        )
    .filter(e => e!=="")
  
  return [...new Set(arr)]
}
// .split() returns array from string
// .map() Fn to each element
// .charCodeAt() converts letter to UTF16
// .toString() (2) converts to binary
// .filter() returns a filtered copy of array
// ... spread syntax 
// new Set() returns unique values 
// Originally tried to convert letter->ASCII->binary->ASCII->letter, was simpler to check conditinal if true return element
