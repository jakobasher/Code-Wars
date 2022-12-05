function stray(numbers) {
  let count = {}
  for (let num of numbers) {
    count[num] = (count[num]||0)+1
  }
  for (let val in count) {
    if ( count[val] == 1){
      return val
    }
  } 
}
// for of loop create an object sorted based on array
// for in loop search object for val=1
