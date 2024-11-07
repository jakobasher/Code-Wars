function twoSum(numbers, target) {
  let map = new Map()
  
  for (let i=0; i<numbers.length; i++) {
    let n = target - numbers[i]
    if (map.has(n)) {
      return [map.get(n), i]
    }
    map.set(numbers[i], i)
  }
//   return []
}
