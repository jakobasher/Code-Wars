function solve(arr) {
  let array = []
  for (let i=0; i<arr.length; i++) {
    let n = arr[i]
    let arr2 = arr.slice(i+1)
    let arr3 = arr2.filter(e => n > e)
    console.log(arr2)
    console.log(arr3)
    if (arr2.every((e, i) => e == arr3[i])) {
      array.push(n)
    }
  }
  return array
}
// .slice() returns begining of array, (number)
// .filter() creates copy of array
// .every() arrays can't be compared due to instances, use .every() to see if every value matches
// .push() add to end of array
