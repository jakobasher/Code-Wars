function convertToMixedNumeral(parm){
  let arr = parm.split("/")
  let num1 = arr[0]/arr[1]
  let num2 = Math.abs(arr[0]%arr[1]) 
  if (num2 == 0) {
    return num1.toString()
  } 
  if (Math.abs(arr[0]/arr[1]) < 1) {
    return `${arr[0]%arr[1]}/${arr[1]}`
  }
  return `${num1.toString().split(".")[0]} ${num2}/${arr[1]}`
}
// .split() return as array
// Math.abs() returns absolute value
// .toString() return as string
