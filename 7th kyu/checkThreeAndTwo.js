function checkThreeAndTwo(array) {
  let obj = {'a': 0, 'b': 0, 'c': 0}
  
  array.forEach(key => {
    obj[key]++
  })
  
  let hasTwo = false
  let hasThree = false
  
  for (let val in obj) {
    if (obj[val] == 3) {
      hasThree = true
    }
    if (obj[val] == 2) {
      hasTwo = true
    }
  }
  return hasTwo && hasThree
}
