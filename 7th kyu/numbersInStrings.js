function solve(s) {
  const matches = s.match(/[a-zA-Z]+|\d+/g).map(Number).filter(Number)
  return Math.max(...matches)
}
// .match() returns array
// .map() Fn to convert to integers
// .filter() filters integers
// could of been simpler
