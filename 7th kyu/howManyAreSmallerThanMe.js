function smaller(nums) {
  let arr = []
  for (let i=0; i<nums.length; i++) {
    let count = 0
    for (let j=i+1; j<nums.length; j++) {
      if (nums[j] < nums[i]) {
        count++
      }
    }
    arr.push(count)
  }
  return arr
}
// Brute force
// Can try using .map
