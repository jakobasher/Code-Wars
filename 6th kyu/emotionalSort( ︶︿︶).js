function sortEmotions(arr, order){
  let o = [":D",":)",":|",":(","T_T"]
  return order 
    ? arr.sort((a,b) => o.indexOf(a) - o.indexOf(b)) 
    : arr.sort((a,b) => o.indexOf(b) - o.indexOf(a)) 
}
// .indexOf() returns first index of 
// .sort() sorts ascending/descending
// Define order, if true, sorts array in ascending index value
