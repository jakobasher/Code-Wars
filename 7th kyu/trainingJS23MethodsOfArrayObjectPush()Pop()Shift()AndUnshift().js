function infiniteLoop(arr,d,n){
  for (let i=0; i<n; i++) {
    if (d == "left") {
      arr[0].push(arr[1].shift())
      arr[1].push(arr[2].shift())
      arr[2].push(arr[0].shift())
    }
    if (d == "right") {
      arr[0].unshift(arr[2].pop())
      arr[1].unshift(arr[0].pop())
      arr[2].unshift(arr[1].pop())
    }
  }
  return arr
}
// .push() add to end of array
// .shift() remove first element of array
// .unshift() remove last element of array
// .pop() add to begin of array
// Left remove first element of next array and to end of previous array
// Right remove last element of next array and to begin of previous array
