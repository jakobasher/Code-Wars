function leastLarger(a,i) {
  let n = a[i]
  let smallestLargerIndex = -1
  let smallestLargerValue = Infinity
  for (let i = 0; i < a.length; i++) {
    if (a[i] > n && a[i] < smallestLargerValue) {
      smallestLargerValue = a[i]
      smallestLargerIndex = i
    }
  }  
  return smallestLargerIndex
}
