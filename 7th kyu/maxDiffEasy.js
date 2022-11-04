function maxDiff(list) {
  let max = Math.max(...list)
  let min = Math.min(...list)
  return list.length < 2 ? 0 : max-min
};

// Math.max() returns max value off list
// Math.min() returns min value off list
// ... spread syntax array to iterable 
