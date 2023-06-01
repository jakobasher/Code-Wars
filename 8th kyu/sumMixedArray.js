function sumMix(x){
  return x.map(Number).reduce((a,c) => a+c, 0)
}
// .map() return each element as an integer, in this case
// .reduce() add elements
