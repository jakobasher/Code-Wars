function sortArray(a1, a2) {
  let indexMap = {}
  for (let i=0; i< a1.length; i++) {
    let firstLetter = a1[i][0]
    indexMap[firstLetter] = i
  }
// console.log(indexMap)
  a2.sort((a, b) => {
    return indexMap[a[0]] - indexMap[b[0]]
  })
  return a2
}
// create a hash map, then sort
