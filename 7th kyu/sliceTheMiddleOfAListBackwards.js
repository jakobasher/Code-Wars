function reverseMiddle(array) {
	let arr = []
  let mid = Math.floor(array.length/2)
  
  if (array.length%2==0) {
    arr.push(array[mid])
    arr.push(array[mid-1])
  } else {
    arr.push(array[mid+1])
    arr.push(array[mid])
    arr.push(array[mid-1])
  }
  return arr
}
