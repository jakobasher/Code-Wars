function dbSort(a){
  let num = a.filter(e => typeof e !== "string").sort((a,b)=>a-b)
  let str = a.filter(e => typeof e == "string").sort()
  return [...num,...str]
}
// .filter() returns filtered array
// .sort() mutates array
// ... spread syntax 
