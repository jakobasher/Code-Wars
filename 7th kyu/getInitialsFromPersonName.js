function toInitials(name) {
  return name.split(" ").map(e=>e[0]+".").join(" ")
}
// .split() returns array
// .map() Fn to each element in array
// .join() returns string
