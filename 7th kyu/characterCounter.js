function validateWord(s){
  let count = {}
  let str = s.toLowerCase()
  for (let key of str) {
    count[key] = (count[key]||0)+1
  }
  let arr = Object.values(count)
  return arr.every(e=>e==arr[0])
}
// .toLowerCase() returns all lower case, where applicable
// Object.values() returns values from Object as array
// .every() returns true if all true
