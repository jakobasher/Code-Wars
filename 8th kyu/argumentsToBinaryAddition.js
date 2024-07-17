function arr2bin(arr){
  return arr.reduce((a,c)=> a + (typeof c == "number" ? c : 0), 0).toString(2)
}
