function solve(a,b){
  return b.map(el =>a.filter(item => item == el).length)
}
// .map() Fn to each element in array
// .filter() returns copy of array
