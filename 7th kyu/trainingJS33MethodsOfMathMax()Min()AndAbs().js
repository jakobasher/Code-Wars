function maxMin(arr1,arr2){
  let arr = arr1.map((e,i)=> e = Math.abs(arr1[i]-arr2[i]))
  return [Math.max(...arr), Math.min(...arr)]
}
// .map() Fn to each element
// Math.abs() returns absolute value
// Math.min() Math.max() returns lowest and highest from iterible
