function convert(number){
  let arr = number.split("")
  let arr2 = []
  for (let i=0; i<number.length; i=i+2) {
    arr2.push(arr[i]+arr[i+1])
  }
  return arr2.map(e=>String.fromCharCode(e)).join("")
}
// .split() returns array
// .push() add to end of array
// .map() Fn to array elements
// .fromCharCode() returns ASCII value
// .join() returns string
