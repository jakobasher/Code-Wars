function contamination(text, char){
  return text.split("").map(e => e=char).join("")
}
// .split() returns array from string
// .map() Fn to each element, change each element to char
// .join() returns string from array
