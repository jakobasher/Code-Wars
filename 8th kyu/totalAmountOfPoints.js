function points(games) {
  return games.reduce((acc,curr) => acc += curr[0] > curr[2] ? 3 : curr[0]<curr[2] ? 0 : 1, 0)
}
// .reduce() add all elements, in this case
// current value at 0th index compared to 2nd index
