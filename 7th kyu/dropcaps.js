function dropCap(n) {
  return n
    .split(" ")
    .map(e=> e.length > 2 ? e[0].toUpperCase()+e.slice(1).toLowerCase(): e)
    .join(" ")
}
// .split() return array from string
// .toUpperCase() return as capital string
// .toLowerCase() return as lower case string
// .slice() returns portion of string
// .join() return string from array
