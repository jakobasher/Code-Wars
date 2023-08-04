function convert(time){
  let ms = time.getMilliseconds()
  return time.toTimeString().split(" ")[0] + "," + ms.toString().padStart(3, '0')
}
// .getMilliseconds() returns millisecond value between 0-999
// .toTimeString() converts to time given a format
// .split() returns array, used to get half in this case
// .toString() returns string, to add leading 0s
// .padStart() add leading values
