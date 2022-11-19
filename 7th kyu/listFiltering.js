function filter_list(l) {
  return l.filter(e => typeof e == "number")
}
// .filter() filters array, returns a copy of filtered array
// typeof, returns a string indicated elements value, ie "number", "string", "boolean"
// Number.isInteger, can try that next time
