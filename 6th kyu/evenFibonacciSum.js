function fibonacci(max) {
  let fib = [0,1]
  for (let i = 1; fib[i]+fib[i-1] < max; i++){
    fib.push(fib[i]+fib[i-1])
  }
  return fib
    .filter(e => e%2==0)
    .reduce((a,c) => a+c,0)
}

// fib = [] to set up fibonacci sequence
// for loop to extend fib sequence
// .push() add element to end of array
// .filter() returns copy of array, even numbers in this case
// .reduce() adds up all elements
