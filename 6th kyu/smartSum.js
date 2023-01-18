function smartSum(...arr){
  return arr
    .flat(Infinity)
    .reduce((a,c) => a+c, 0)
}
// .flat() opens array to a depth, no sub arrays in this case
// .reduce() adds all elements together
