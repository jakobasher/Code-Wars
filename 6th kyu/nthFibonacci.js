function nthFibo(n) {
  let fib = [0,1]
  for (let i=1;i<n; i++) {
    fib.push(fib[i] + fib[i-1])
  }
  return fib[n-1]
}
// .push() add end of array
// create fibonacci array, find index
