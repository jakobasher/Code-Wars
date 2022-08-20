function min(arr, toReturn) {
  let minValue = Math.min(...arr)
  let minIndex = arr.indexOf(minValue)  
  
  return toReturn == 'value' ? minValue : minIndex
  
  
}

// Math.min() returns lowest value passed through
// ... Spread Syntax
// .indexOf() returns index of value found
