function minSum(arr) {
  arr.sort((a,b)=>a-b)
  let count = 0
  
  for (let i = 0; i<arr.length/2; i++) {
    count += arr[i] * arr[arr.length-1-i]
  }  
  
  return count
}

// .sort() sorts array, mutates array
