function maxTriSum(numbers){
  return [...new Set(numbers)]
    .sort((a,b) => b-a)
    .slice(0,3)
    .reduce((a,c) => a+c, 0)
}

// new Set() returns unique elements
// ... spread syntax 
// .sort() modifies original
// .slice() returns portion of array
// .reduce() sums up 
