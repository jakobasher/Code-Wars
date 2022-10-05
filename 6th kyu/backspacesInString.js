function cleanString(s) {
  let arr = s.split("")
  for (let i = 0; i<arr.length; i++) {
    if (str[i] == "#") {
      arr[i] = ""
      arr[i-1] = ""
      arr = arr.filter(e => e!== "")
      i = i - 2
    }
  }
  return arr.join("")
}

// .split() string to array
// .filter() returns shallow copy of array
// .join() array to string
