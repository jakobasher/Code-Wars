function fib(n) {
  let arr = [0,1]
  for (let i=1; i<n; i++) {
    arr.push(arr[i-1] + arr[i])
  }
  return arr[n-1]
}
// .push() add element to end of array
// Create a fib sequence but faster?
