function containAllRots(strng, arr) {
  for (let i=0; i<strng.length; i++) {
    if (arr.indexOf(strng.slice(i) + strng.slice(0, i)) == -1) {
      return false
    }
  }
  return true
}
// .indexOf() returns first index when true, else -1
// .slice() returns portion 
