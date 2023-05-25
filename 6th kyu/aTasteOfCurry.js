function curry(fun, ...args) {
  return function(...arg2) {
    return fun.call(this, ...args, ...arg2)
  }
}
// //Return a new function that will be the curried version of the original function
// Invoke the original function with the provided arguments and the additional arguments passed to the curried function
