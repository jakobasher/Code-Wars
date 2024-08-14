function distancesFromAverage(arr){
  let avg = arr.reduce((a, c) => a + c) / arr.length
  return arr.map(e => +(avg - e).toFixed(2))
}
