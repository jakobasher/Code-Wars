function blowCandles(str) {
  let count = 0
  let arr = str.split("").map(Number)
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 0) {
        arr[i] = arr[i] - 1
        if (arr[i+1]>0) arr[i+1] = arr[i+1] - 1
        if (arr[i+2]>0) arr[i+2] = arr[i+2] - 1

        count++
        if (arr[i] !==0) i--
      }
  }
  return count
}
