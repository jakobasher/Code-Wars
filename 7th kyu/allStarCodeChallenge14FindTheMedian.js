function median(array) {
  array.sort((a,b)=>a-b)
  return array.length % 2 == 1 
    ? array[Math.floor(array.length/2)]
    : (array[array.length/2] + array[array.length/2-1]) / 2
}
// .sort() sorts be ascending values, in this case
