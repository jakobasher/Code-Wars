var maxSequence = function(arr){
  let sum = 0
  for (let i = 0; i<arr.length; i++) {
    for (let j = 0; j<=arr.length; j++) {
      let num = arr.slice(i,j).reduce((a,c) => a+c, 0)
      if (num > sum) {
        sum = num
      }
    }
  }
  return sum > 0 ? sum : 0
}

// .slice() returns portion of array, in this case removes the beginning and end to add up
// .reduce() adds elements in array
