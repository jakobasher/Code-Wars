function zeroPlentiful(arr) {
  let zeros = 0;
  let arr2 = []
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeros++
    } else {
      arr2.push(zeros)
      zeros = 0
    }
  }
  
  arr2.push(zeros)
  let arr3 = arr2.filter (e=> e!==0)
  return arr3.some(e=> e<4) ? 0 : arr3.length
}
// Messy, Count chain zeroes, add to array, array filters out 0s (non zero numbers), if every number is above 4, it is zero plentiful, else it is 0 
