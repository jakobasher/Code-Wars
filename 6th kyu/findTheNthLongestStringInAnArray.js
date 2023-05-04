function longest(arr, n) {
  let idx = arr.slice()
  arr.sort((a,b) => b.length - a.length || idx.indexOf(a) - idx.indexOf(b))
  return arr[n-1]
}
// .slice() to create copy of array
// .sort() mutates array which is why we need a copy, b-a return longest to shortest, if same return by index order
