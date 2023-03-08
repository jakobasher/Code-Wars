// return the magic index
function findMagic(arr){
  let num = arr.filter((e,i) => e==i)[0]
  return num > 0 ? num : -1
}
// .filter() returns array elements that are true
// Can try .findIndex(), returns first true case, ie arr.findIndex(i => arr[i] === i)
