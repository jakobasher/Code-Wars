function stairsIn20(s){
  return s.flat(1).reduce((a,c)=>a+c,0)*20
}
// .flat() opens array to nth degree
// .reduce() adds all elements, in this case
