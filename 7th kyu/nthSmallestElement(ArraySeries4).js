function nthSmallest(arr, pos){
  return arr.sort((a,b) => a-b)[pos-1]
}

// .sort() a-b, mutates array, lowest to greatest
// nth value == index+1
