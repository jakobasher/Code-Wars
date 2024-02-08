function oddOnesOut(nums) {
  let count = {}
  for (let key of nums) {
    count[key] = (count[key] || 0) + 1
  }
  return nums.filter(e => count[e] %2 == 0)
}
// for of loop, form an object list
// .filter() filters array
