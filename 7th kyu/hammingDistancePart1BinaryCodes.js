function hammingDistance (a, b) {
  let arr1 = a.split("")
  let arr2 = b.split("")
  let count = 0
  for (let i = 0; i<arr1.length; i++){
    if (arr1[i]!==arr2[i]){
      count++
    }
  }
  return count
}

// .split() string to array
