const arrCheck = value => {
  return value.every(e => Array.isArray(e))
}
// .every() checks if every element in array returns true, returns true else false
// Array.isArray() returns true/false if is array
