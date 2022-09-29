function reverseWords(str) {
  return str.split(" ")
    .map(e => e.split("").reverse().join(""))
    .join(" ")
}

// .split() string to array
// .map() Fn to each element
// .reverse() reverses array order, mutates array
// .join() array to string
