function countSpecMult(n, mxval) {
  let arr = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199]
  let num = arr.slice(0,n).reduce((a,c) => a*c, 1)
  return Math.floor(mxval/num)
}

// .slice() returns shallow copy of array
// .reduce() returns integers, multiplys all elements in this case
// Math.floor() rounds down
