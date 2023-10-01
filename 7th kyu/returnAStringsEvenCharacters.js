function evenChars(string) {
  if (string.length < 2 || string.length > 100) {
    return "invalid string"
  }
  return string.split("").filter((e,i)=>i%2!==0)
}
// .split() returns array
// .filter() returns copy of array, even index in this case
