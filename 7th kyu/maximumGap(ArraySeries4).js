function maxGap (numbers){
  let array = []
  numbers.sort((a,b) => b-a)
  for (let i = 0; i < numbers.length-1; i++) {
    array.push(Math.abs(numbers[i]-numbers[i+1]))
  }     
  return Math.max(...array)
}

// .sort() sorts elements, changes original array
// .push() add element to end of array
// Math.abs() returns absolute value of number
// Math.max() returns largest number from inputs
// ... spread syntax can expand array for inputs

// sorts array, go through array pairs, add to new array, return max value of new array
