var isSquare = function(arr){
  let isSquared = arr.every(e => Math.pow(e,0.5)%1 == 0)
  return arr.length > 1 ? isSquared : undefined
}
// .every() if every element in array returns true, returns true, else returns false
// .Math.pow() 0.5 for SQRT, %1==0 to check if integer
