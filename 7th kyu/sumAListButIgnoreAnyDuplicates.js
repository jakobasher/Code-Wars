function sumNoDuplicates(numList) {
  let count = {}
  let num = 0
  for (let key of numList) {
    count[key] = (count[key] || 0) +1
  }
  for (let val in count){
    if ( count[val] === 1){
        num += +val
    }
  }
  return num 
}
// for of loop to count values
// for in loop to filter values
