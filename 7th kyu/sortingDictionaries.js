function sortDict(dict) {
    return Object.keys(dict)
      .map(e => [+e || e,dict[e]])
      .sort((a,b) => b[1] - a[1])
}

// .map() Fn to each element
// +var returns a number or NaN
// .sort() b-a sorts by descending
