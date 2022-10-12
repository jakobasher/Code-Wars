function search(budget, prices) {
  return prices
    .filter(e => e<=budget)
    .sort((a,b) => a-b)
    .join(",")
}

// .filter() returns filtered copy of array
// .sort() a-b ascending
// .join() returns string
