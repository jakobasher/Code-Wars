function averages(numbers) {
  if (numbers == null || numbers.length <= 1) return []
  let arr = []
  for (let i=0; i<numbers.length-1; i++) {
    let n = numbers[i]+numbers[i+1]
    arr.push(n/2)
  }
  return arr
}
// .push() add to end of array
// Check null before checking length
