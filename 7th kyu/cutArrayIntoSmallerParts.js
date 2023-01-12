function makeParts(arr, chunkSize) {
  let array = []
  while (arr.length > 0) {
    let chunk = arr.splice(0,chunkSize)
    array.push(chunk)
  }
  return array
}
// .splice() returns portion of array, continuously splicing array in this case
// .push() adds element to end of array
