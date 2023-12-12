function blackAndWhite(arr){
  if (!Array.isArray(arr)) {
    return "It's a fake array"
  }
  return arr.indexOf(5) !== -1 && arr.indexOf(13) !== -1
    ? "It's a black array"
    : "It's a white array"
}
// .Array.isArray() returns t/f
// .indexOf() returns index of first occurance, -1 if does not exist
