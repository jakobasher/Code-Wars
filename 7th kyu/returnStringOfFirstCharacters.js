function makeString(s){
  return s.split(" ").map(e=>e[0]).join("")
}
// .split() returns array
// .map() Fn to return first char
// .join() return string
