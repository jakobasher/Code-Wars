function findDeletedNumber(arr, mixArr) {
//   if (arr.length == mixArr.length) return 0
  return arr.find(e=> !mixArr.includes(e)) || 0
}
// .find() returns first element when true
// .includes() returns t/f
// If the element is included returns !true, returns false, when missing returns !false, returns true
