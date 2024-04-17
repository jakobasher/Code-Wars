function add(arr) {
  let array = []
  let sum = 0
  for (let i=0; i<arr.length; i++) {
    array.push(sum+=arr[i])
  }
  return array
}
