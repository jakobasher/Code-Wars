function asteriscIt(n) {
  if (Array.isArray(n)) {
    let arr = n.join("").split("")
    for (let i=0; i<arr.length; i++) {
      if (arr[i]%2==0 && arr[i+1]%2==0) {
        arr[i] = arr[i]+"*"
      }
    }    
    return arr.join("")
  }
  let arr = n.toString().split("").map(Number)
  for (let i=0; i<arr.length; i++) {
    if (arr[i]%2==0 && arr[i+1]%2==0) {
      arr[i] = arr[i]+"*"
    }
  }
  return arr.map(String).reduce((a,c)=>a+c)
};
// Array.isArray() returns tf if array
// .join() returns string
// .split() returns array
// .map() convert to integer, in this case
// .reduce() add all elements in array, in this case
