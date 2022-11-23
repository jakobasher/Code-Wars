function mostFrequentItemCount(collection) {
  let count = {}
  for (let num of collection) {
    count[num] = (count[num] || 0) + 1
  }
  let array = Object.values(count)
  let max = Math.max(...array)
  return max >= 0 ? max : 0
}

// for of loop, let var of array, in this case, count[num] if exist else creates
// Object.values() returns all values of keys in an object as an array
// Math.max() returns maximum value of a list
// ... spread syntax, opens array 
