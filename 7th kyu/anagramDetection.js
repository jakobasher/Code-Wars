var isAnagram = function(test, original) {
  let str1 = test.toLowerCase().split("").sort().join()
  let str2 = original.toLowerCase().split("").sort().join()
  return str1 == str2
}
// .toLowerCase() returns lower case letters
// .split() returns array from string
// .sort() returns array in ascending elements, in this case
// .join() returns string from array
