function removeDuplication(arr){
  const count = {}
  const dupes = []

  for (let num of arr) {
    count[num] = (count[num] || 0) + 1
  }
  for (let num of arr) {
    if (count[num] === 1) {
      dupes.push(num)
    }
  }

  return dupes.filter(e => e!=undefined)
}
// Create hash map, for of loop increment if exist else create
// For of loop to filter
// .filter() patch work
