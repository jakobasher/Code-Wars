function sumArray(array) {
  if (array == null) return 0
  if (array.length <= 2) return 0
  return array.sort((a,b)=>a-b).slice(1,-1).reduce((a,c)=>a+c,0)
}
// .sort() sort array by highest to lowest, in this case
// .slice() returns portion of array, without first and last in this case
// .reduce() adds all elements in array, in this case
