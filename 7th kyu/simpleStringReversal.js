function solve(str){
  let indexArray = []
  for (let i=0; i<str.length; i++) {
    if (str[i] == " ") {
      indexArray.push(i)
    }
  }
  let str2 = str.split("").reverse().filter(e=>e!==" ").join("")
  for (let i=0; i<indexArray.length; i++) {
    str2 = str2.slice(0,indexArray[i]) + " " + str2.slice(indexArray[i]);
  } 
  return str2
}
// .push() adds element to end of array
// .split() returns array
// .reverse() reverse array index
// .filter() returns a filtered array, no spaces in this case
// .join() returns string
// .slice() or .substr() returns portion of string
// Split reversed string into portions to match space index
