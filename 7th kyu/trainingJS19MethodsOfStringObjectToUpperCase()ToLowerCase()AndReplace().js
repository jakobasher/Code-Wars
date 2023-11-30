function alienLanguage(str){
  return str
    .split(" ")
    .map( e => e.toUpperCase().slice(0,-1) + e.slice(-1).toLowerCase())
    .join(" ")
}
// .split() return as array
// .map() Fn to each elemenet
// .toUpperCase() return as capitals, could of done at begin
// .slice() returns portion of array
// .toLowerCase() return as lower case
// .join() return as string
