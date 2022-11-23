var solution = function(firstArray, secondArray) {
  let array = []
  for (let i = 0; i<firstArray.length; i++) {
    array.push(firstArray[i] - secondArray[i])
  }
  let num = array.map(e=>Math.pow(e,2)).reduce((a,c) => a+c,0) / array.length 
  return num
}
// .push() adds element to end of array
// .map() Fn to each element
// Math.pow() base raised to an exponent
// .reduce() adds all elements, in this case
