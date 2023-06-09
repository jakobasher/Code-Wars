function alternateCase(s) {
  return s
    .split("")
    .map(e=> e == e.toUpperCase() ? e.toLowerCase() : e.toUpperCase())
    .join("")
}
// .split() return as array so can map
// .map() check each element, return opposite
// .join() return string from array
