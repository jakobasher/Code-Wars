function addArrays(array1, array2) {
  if (array1.length==0 && array2.length==0) return []
  if (array1.length==0) return array2
  if (array2.length==0) return array1
  
  let sum = (+array1.join("") + +array2.join("")).toString()
  if (sum < 0){
    sum = sum.slice(1).split("").map(Number)
    sum[0] = sum[0] * -1
    return sum
  }
  return sum.split("").map(Number)
}
// Set up edge cases
// .join() used to add arrays
// .toString() returns string from integer
// If negative, remove first index, convert string into array, convert new first index to negative
// Else convert array to answer
