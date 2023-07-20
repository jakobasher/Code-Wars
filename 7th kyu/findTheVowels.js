function vowelIndices(word){
  let vowels = ["a","e","i","o","u","y"]
  return word
    .toLowerCase()
    .split("")
    .map((e,i)=>vowels.includes(e) ? i+1 : e)
    .filter(Number)
}
// .toLowerCase() return as lower case
// .split() return as array from string
// .map() Fn to each element
// .includes() returns t/f
// .filter() Number in this case
