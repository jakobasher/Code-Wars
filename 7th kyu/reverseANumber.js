function reverseNumber(n) {
  let num = +n.toString().split("").reverse().filter(Number).join("")
  return n > 0 ? num : num*-1
}
// +var return as integer where aplicable
// .toString() return as string
// .split() return array 
// .reverse() reverse array indexes
// .filter() return copy of array, Numbers in this case
// .join() return string from array
