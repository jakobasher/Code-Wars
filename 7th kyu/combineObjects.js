function combine() {
  let arr = [...arguments]
  let obj = {}
  for (let i=0; i<arguments.length; i++) {
    for (let key in arguments[i]) {
      if (!obj[key]) {
        obj[key] = arr[i][key]
      } else {
        obj[key] += arr[i][key]
      }
    }      
  }
  return obj
}
// ...spread syntax
// arguments, arguments of the function
// for in loop, if exist the adds else create
