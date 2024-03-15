function longestWord(stringOfWords){
  let arr = stringOfWords.split(" ")
  let longestLength = 0
  let longestWord = 0
  for (let i=0; i<arr.length; i++) {
    if (arr[i].length >= longestLength) {
      longestLength = arr[i].length
      longestWord = arr[i]
    }
  }
  return longestWord
}
// Can try sorting and pop last el
