function removeDuplicateWords (s) {
  let arr = s.split(" ")
  return [...new Set(arr)].join(" ")
}
// .split() return array from string
// ... spread syntax
// new Set() returns unique values from array
// .join() return string from array
