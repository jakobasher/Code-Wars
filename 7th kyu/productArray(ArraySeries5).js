function productArray(numbers){
  let prod = numbers.reduce((a,c) => a*c, 1)
  return numbers.map(e => prod / e)
}

// .reduce() multiply all elements in this case
// .map() function to each element

// Find product of array, cycle through array by dividing by each element
