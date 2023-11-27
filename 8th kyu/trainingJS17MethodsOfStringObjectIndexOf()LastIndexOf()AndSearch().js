function firstToLast(str,c){
  if (str.search(c) < 0) return -1
  return str.lastIndexOf(c) - str.indexOf(c)
}
// .search() returns first index of str[0], else -1
// .indexOf() returns first index of, else -1
// .lastIndexOf() returns last index of, else -1
