function findHack(arr) {
  let grades = {A:30,B:20,C:10,D:5}
  for (let i=0; i<arr.length; i++) {
    let scores = arr[i][2].map(e => grades[e] || 0)
    let num = scores.reduce((a,c) => a+c,0)
    arr[i][2] = scores.every(e => e>=20) && scores.length >= 5 
      ? num + 20 
      : num
  }
  return arr
    .filter((e,i) => e[1]!==e[2])
    .map(e => e[0])
}
// First create a grades map
// .map() convert grades to points via map else 0, in this case
// .reduce() adds all grades, in this case
// .every() if all elements in array is true, return true
// .filter() return copy of array, does grade number equal to scoring pattern
// .map() Used to get names
