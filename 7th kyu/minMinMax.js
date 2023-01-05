function minMinMax(array) {
  array.sort((a,b)=>a-b)
  let min = array[0]
  let max = array[array.length-1]
  let Min = min
  while (array.includes(Min)){
    Min = Min+1
  }
  return [min, Min, max]
}
// .sort() sorts array, ascending a-b in this case, mutates array
// while() while () is true, run, else break
