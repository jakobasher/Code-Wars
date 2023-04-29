function getNumberFromString(s) {
  return +s.match(/\d/g).join("")
}
// +var return as integer
// .match() returns REGEX \d digits in this case
// .join() returns string 
