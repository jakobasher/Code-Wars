function nextPal(val) {
  for (let i=val+1; ; i++) {
    if (i == i.toString().split("").reverse().join("")) {
      return i
      break
    }
  }
}
// .toString() returns string
// .split() returns array
// .reverse() reverse array order
// .join() returns string
