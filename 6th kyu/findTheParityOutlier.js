function findOutlier(integers){
  
  let even = integers.filter(e => e%2 == 0)
  let odd = integers.filter(e => e%2 !== 0)
  
  return even.length == 1 ? even[0] : odd[0]
  
}

// .filter() returns new array
