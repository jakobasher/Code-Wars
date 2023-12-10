function mirrorImage(arr){
  for (let i=0; i<arr.length-1; i++) {
    if (arr[i].toString().split("").reverse().join("") === arr[i+1].toString()) {
      return [arr[i],arr[i+1]]
    }
  }
  return [-1,-1]
}
// .toString() return as string
// .split() return as array
// .reverse() reverse array index
// .join() return as string
