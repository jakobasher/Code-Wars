function vaporcode(string) {
  return string
    .toUpperCase()
    .replace(/ /g, "")
    .split("")
    .map(e => e+"  ")
    .join("")
    .trim()
}

// .toUpperCase() returns uppercase
// .replace() / /g REGEX global replaces all instances
// .split() returns array 
// .map() each element 
// .join() returns string
// .trim() removes space at begin and end
