const prevMultOfThree = n => {
  if (n == 0) return null
  if (n%3 == 0) return n
  return prevMultOfThree(+n.toString().slice(0,-1))
}

// .toString() returns string from integer
// .slice() returrns portion of array, -1 removes last index
// + before element returns as integer
