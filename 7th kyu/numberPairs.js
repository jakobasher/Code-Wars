function getLargerNumbers(a, b) {
  let newArray = []
  for (let i=0; i<a.length; i++) {
    a[i] > b[i] 
      ? newArray.push(a[i]) 
      : newArray.push(b[i])
  }
  return newArray;
}
// .push() add element to end of array
// 
