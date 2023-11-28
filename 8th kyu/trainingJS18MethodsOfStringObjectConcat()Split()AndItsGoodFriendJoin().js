function splitAndMerge(string, separator) {
  return string.split(" ").map(e=>e.split("").join(separator)).join(" ")
}
// .split() return as array
// .map() Fn to split each element again
// .join() join by separator then return as string
