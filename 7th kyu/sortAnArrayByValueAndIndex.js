function sortByValueAndIndex(array) {
  
  return array
    .map((e, i) => [e, ++i*e])
    .sort((a, b) => a[1] - b[1])
    .map(e => e[0])
  
  
}

// .map() function each element
// .sort() a[1] sort by second 
