function closest(arr){
  if (arr.includes(0)) return 0
  let pos = arr.filter(e=>e>0).sort((a,b)=>a-b)[0]
  let neg = arr.filter(e=>e<0).sort((a,b)=>b-a)[0]
  if (arr.every(e=>e>0)) return pos
  if (arr.every(e=>e<0)) return neg
  if (pos + neg == 0) return null
  return pos + neg > 0 ? neg : pos
}
// Every case here
// .includes() return t/f
// .filter() returns copy of array 
// .sort() sorts by ascending or descending
// .every() if every true then true else false
