function countSmileys(arr) {
  let faces = [":)",":D",":-)",":-D",":~)",":~D",";)",";D",";-)",";-D",";~)",";~D"]
  let count = 0
  for (let i=0; i<arr.length; i++) {
    if (faces.includes(arr[i])) {
      count++
    }
  }
  return count
}

// List every possible outcome
// .includes() returns true if element in array
// Try REGEX /^[:;][-~]?[)D]$/ and .test() to search for combination
