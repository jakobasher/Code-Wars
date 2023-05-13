function removeConsecutiveDuplicates(str) {
  let arr = str.split(' ')
  let result = []

  for (let i=0; i < arr.length; i++) {
    if (i==0 || arr[i] !== arr[i-1]) {
      result.push(arr[i])
    }
  }
  return result.join(' ')
}
// .split() return array from string
// .push() add to end of array
// .join() return string from array
