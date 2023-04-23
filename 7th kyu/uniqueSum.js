function uniqueSum(lst){
  if (lst.length == 0) return null
  return [...new Set(lst)].reduce((a,c)=>a+c,0)
}
// new Set() returns unique values
// ... spread syntax iterible objects into array
// .reduce() adds each elements in array, in this case
