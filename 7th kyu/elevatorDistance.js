function elevatorDistance(array) {
  let arr = []
  for (let i=0; i<array.length-1; i++) {
    arr.push(Math.abs(array[i]-array[i+1]))
  }
  return arr.reduce((a,c)=>a+c,0)
}
// Math.abs() returns absolute value
// .push() adds to end of array
// .reduce() adds all elements in array, in this case
