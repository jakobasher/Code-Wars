function highestRank(arr){
  let count = {}
  for (let key of arr) {
    count[key] = (count[key] || 0) + 1
  }
  let max = Math.max(...Object.values(count))
  let results = Object.keys(count).filter((key) => count[key] == max);
  return (results.length > 1) 
    ? Math.max(...results)
    : +results
}
// for of loop, create object to group multiple values
// Math.max() returns highest iterible value
// Object.values() retruns array from values
// Object.keys() returns array from keys
// .filter() used to match key value to highest number
