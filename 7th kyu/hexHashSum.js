function hexHash(code){
  return code
    .split("")
    .map(e=>e.charCodeAt(0).toString(16))
    .map(e=>e.split(""))
    .flat(1)
    .filter(Number)
    .map(Number)
    .reduce((a,c)=>a+c,0)
}
// .split() returns array from string
// .map() Fn to each element
// .charCodeAt() returns integer from UTF-16, 0-65535
// .toString() returns a string representing a number value, 16 for hex in this case
// .flat() concats subarrays, 1 level in this case
// .filter() returns specied value, numbers in this case 
// .reduce() adds up elements
