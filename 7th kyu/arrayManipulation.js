function arrayManip(array){
  for (let i=0; i<array.length; i++) {
    let arr = []
    for (let j=i+1; j<array.length; j++) {
      if (array[i] < array[j]) {
        arr.push(array[j])
      }
    }
    let min = arr.length > 0 ? Math.min(...arr) : -1
    array[i] = min
    arr = []
  }
  return array
}
