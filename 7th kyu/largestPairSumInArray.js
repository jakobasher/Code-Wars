function largestPairSum (numbers) {
  numbers.sort((a,b) => b-a)
  return numbers[0] + numbers[1]
}
// .sort() mutates array, b-a sorts in descending order
