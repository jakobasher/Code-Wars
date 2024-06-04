function divisibleByLast(n) {
  let arr = n.toString().split("").map(Number)
  let array = [false]
  for (let i=1; i<arr.length; i++) {
    array.push(arr[i]%arr[i-1]==0)
  }
  return array
}
