function findMissingNumber(sequence){
  if (sequence.length == 0) return 0
  let array = sequence.split(" ").map(Number).sort((a,b)=>a-b)
  if (array.some(isNaN)) return 1
  for (let i=0; i<array.length; i++) {
    if (array[i] !== i+1) {
      return i+1
    }
  }
  return 0
}
