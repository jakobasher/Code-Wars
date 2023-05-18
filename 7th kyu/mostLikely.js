function mostLikely(prob1,prob2){
  let arr1 = prob1.split(":").map(Number)
  let arr2 = prob2.split(":").map(Number)
  return arr1[0] / arr1[1] > arr2[0] / arr2[1]
}
// .split() returns array from string 
// .map() Fn to each element, converter to integer in this case
