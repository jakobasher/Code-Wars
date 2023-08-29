function rangeBitCount(a, b) {
  let array = []
  for (let i=a; i<=b; i++) {
    array.push(i)
  }
  return array
    .map(e=>e.toString(2).split(""))
    .flat()
    .filter(e=>e=="1")
    .length
}
// .push() add element to end of array
// .map() Fn to each element
// .toString() convert int to binary, 2 in this case
// .split() convert binary to individual 1s and 0s, in this case
// .flat open sub arrays
// .filter() creates copy of array, with only 1s in this case
