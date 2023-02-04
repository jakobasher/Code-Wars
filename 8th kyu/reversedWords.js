function reverseWords(str){
  return str.split(" ").reverse().join(" ")
}
// .split() returns array from string, split by word in this case
// .reverse() reverse array index
// .join() returns string from array, keeps word in this case
