function strCount(str, letter){  
  return str.split("").filter(e=>e==letter).length
}
// .split() return string as array
// .filter() return filtered array
// .length returns integer
