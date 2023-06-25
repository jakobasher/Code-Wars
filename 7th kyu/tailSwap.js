function tailSwap(arr) {
  let array = arr.map(e=>e.split(":")).flat()
  let str1 = array[0]+":"+array[3]
  let str2 = array[2]+":"+array[1]
  return [str1, str2]
}
// .map() Fn to array elements
// .split() returns array from string
// .flat() opens up array to nth degree
