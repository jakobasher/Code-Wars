function pipeFix(numbers){
  let i = Math.min(...numbers)
  let j = Math.max(...numbers)
  let array = []
  while (i<j+1) {
    array.push(i)
    i++
  }
  return array
}
// First try, create new array from start to finish
