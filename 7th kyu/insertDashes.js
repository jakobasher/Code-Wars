function insertDash(num) {
  let arr = num.toString().split("").map(Number)
  let arr2= [arr[0]]
  for (let i = 1; i<arr.length; i++) {
    if ((arr[i]%2 == 1) && (arr[i-1]%2 == 1)){
        arr2.push(arr[i]*-1)
    } else {
      arr2.push(arr[i])
    }
  }
  return arr2.join("")
}

// .toString() integer to string
// .split() string to array
// .map() Fn 
// Number return as integer
// .push() add to end of array
// .join() array to string
