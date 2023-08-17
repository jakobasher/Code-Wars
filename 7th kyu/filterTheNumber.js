var filterString = function(value) {
  let num = value.split("").filter(e => e>="0" && e<="9").join("")
  return +num
}
// .split() return array from string
// .filter() returns copy of array
// .join() return string from array
// +var return as integer if possible
