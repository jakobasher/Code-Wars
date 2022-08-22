
function maxProduct(numbers, size){

  return numbers.sort((a,b) => a-b).slice(-size).reduce((a,c) => a*c,1)
  
  
}

// .sort() a-b lowest to highest
// .slice() returns portion of array
// .reduce() 
