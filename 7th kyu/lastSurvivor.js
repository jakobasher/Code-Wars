function lastSurvivor(letters, coords) {
  let array = letters.split("")
  for (let i=0; i<coords.length; i++) {
    let idx = coords[i]
    array.splice(idx,1)
  }
  return array[0]
}
// .split() returns array from string
// .splice() adds/replaces elements in array, mutates array
