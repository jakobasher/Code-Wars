function solve(s){
  return s
    .split("")
    .sort()
    .map(e => e.charCodeAt())
    .map((e, i, arr) => e + 1 === arr[i + 1])
    .filter(e => e == false)
    .length < 2
}
// .split() returns array
// .sort() sorts in alphabetical order, in this case
// .map() convert each element
// .charCodeAT() returns ASCII value
// .map() checks if current value is in consecutive order
// .filter() if 0 or 1 false then it is in order, else 
