function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter(e=> !geese.includes(e))
};
// .filter() returns array only true conditions, does not mutate
// .includes() returns t/f if array contains element
