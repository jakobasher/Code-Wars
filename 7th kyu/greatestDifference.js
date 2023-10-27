function diff(str){
  let arr = [];
  for (let pair of str) {
    let [num1, num2] = pair.split('-').map(Number);
    arr.push(Math.abs(num1 - num2))
  }
  if (arr.every(e=> e == 0)) {
    return false
  }
  let highest = Math.max(...arr)
  let idx = arr.indexOf(highest)
  return str[idx]
}
// for of loop to loop through every index
// .split() return as array
// .map() return as integer, in this case
// .push() add to end of array
// Math.abs() returns absolute value
// .every() if every case is true, return true
// .indexOf() return first occurance in array
