function sort(initialArray, sortingArray) {
  let arr = []
  
  for (let i = 0; i<sortingArray.length; i++) {
    let index = sortingArray.indexOf(i)
    arr.push(initialArray[index])
  }
  
  return arr
}

// .indexOf() returns index of first value found
// .push() adds element to end of array
