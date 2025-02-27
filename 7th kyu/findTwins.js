function elimination(arr){
  for (let i=0; i<arr.length; i++) {
    if (arr.indexOf(arr[i]) !== i) {
      return arr[i]
    }
  }
  return null
}
