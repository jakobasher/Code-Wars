function differenceInAges(ages){
  let oldest = Math.max(...ages)
  let youngest = Math.min(...ages)
  let difference = oldest - youngest
  return [youngest, oldest, difference]
}
// Math.min() Math.max() returns highest and lowest from list
// ... spread syntax, array to list in this case
