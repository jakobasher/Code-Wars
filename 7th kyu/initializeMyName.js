function initializeNames(name){
  let arr = name.split(" ")
  for (let i=1; i<arr.length-1; i++) {
    arr[i] = arr[i].substring(0,1)+"."
  }
  return arr.join(" ")
}
// .split() returns array from string
// .substring() returns portion between index
// .join() returns string from array
// A challenge with very specific cases
