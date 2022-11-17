function getWinner(listOfBallots) {
  let count = {}
  for (let num of listOfBallots) {
    count[num] = (count[num] || 0) + 1
  }
  let arr = Object.values(count);
  let max = Math.max(...arr)
  let sum = arr.reduce((a, c) => a+c, 0);
  
  let winner = Object.keys(count).find(key => count[key] == max)

  return max/sum > 0.5 ? winner : null 
}

// for() fills object if does not exist, +1 if exist
// Object.values() a method to return all the values from the object as an array
// Math.max() returns max values, of iterible objects
// ... spread syntax, array to iterible objects
// .reduce() adds up elements
// Object.keys() a method to return all the keys from the object as an array
// .find() returns element at closest index
