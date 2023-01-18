function cubeOdd(arr) {
  if (arr.some(e=> typeof e !=="number")) 
    return undefined
  return arr
    .map(e => e**3)
    .filter(e => e%2!==0)
    .reduce((a,c) => a+c,0)
}
// .some() if one element Fn returns true, return true
// typeof, returns operands value, numbers in this case
// .map() Fn to each element, mutates
// .filter() filters array copy
// .reduce() adds elements in array
// Can try .every() instead of .some()
