function reverseMessage(str) {
  if (str == "") return str
  return str
    .toLowerCase()
    .split("")
    .reverse()
    .join("")
    .split(" ")
    .map(e=>e=e[0].toUpperCase()+e.slice(1))
    .join(" ")
}
// .toLowerCase() .toUpperCase() returns as lower/capital
// .split() returns array
// .reverse() reverses array index
// .join() returns string
// .map() Fn to each element
