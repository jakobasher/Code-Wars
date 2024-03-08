function timedReading(maxLength, text) {
  let arr = text.split(/\W+/)
  let readableWords = arr.filter(word => word.length > 0 && word.length <= maxLength)
  return readableWords.length
}
