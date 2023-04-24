function sumFactorial(arr){
  let sum = 0
  for (let i=0; i<arr.length; i++) {
    let num = 1
    for (let j=arr[i]; j > 0; j--) {
      num *= j
    }
    arr[i] = num
  }
  return arr.reduce((a,c)=>a+c)
}
// Loop 1 go through array, loop 2 countdown multip[ly
// .reduce() adds elements from array, in this case
