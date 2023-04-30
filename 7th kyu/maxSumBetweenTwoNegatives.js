function maxSumBetweenTwoNegatives(a) {
  let maxSum = -1;
  let start = -1;
  for (let i=0; i < a.length; i++) {
    if (a[i] < 0) {
      if (start >= 0) {
        let sum = a.slice(start + 1, i).reduce((a, c) => a + (c > 0 ? c : 0), 0);
        if (sum > maxSum) {
          maxSum = sum
        }
      }
      start = i
    }
  }
  return maxSum
}
// /.slice() returns portion of array
// .reduce() adds elements of array
