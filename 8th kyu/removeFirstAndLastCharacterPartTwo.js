function array(string) {
  return string.split(",").slice(1,-1).join(" ") || null
}
// .split() return array from string
// .slice() returns portion, 1st index and last removed in this case
// .join() returns string from array
// || If exist then return true else null
