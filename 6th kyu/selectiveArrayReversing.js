function selReverse(array, length) {
  if (length == 0) return array
  let arr = []
  for (let i=0; i<array.length; i+=length) {
    arr.push(array.slice(i,i+length).reverse())
  }
  return arr.flat()
}
// .push() add element to end of array
// .slice() return a portion of array between
// .reverse() reverses index of array
// .flat() opens array, 1 degree in this case
