function twoOldestAges(ages){
  return ages.sort((a,b)=>a-b).slice(-2)
}
// .sort() mutates array, sorts by ascending, in this case
// .slice() returns copy of array, last 2 in this case
