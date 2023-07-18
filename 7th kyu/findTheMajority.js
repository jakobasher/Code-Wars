function majority(arr) {
  let count = {}
  for (let key of arr) {
    count[key] = (count[key] || 0) + 1
  }
  let array = Object.values(count).sort((a,b)=>b-a)
  if (array[0] == array[1]) return null
  
  let mostCommon
  let maxCount = 0
  for (let key of arr) {
    if (count[key] > maxCount) {
      mostCommon = key
      maxCount = count[key]
    }
  }
  
  return mostCommon
}
// First create a hash map, if exist then +1 else create then +1
// Second check to see if tie for highest, return null if true
// Third, find highest via for of loop
