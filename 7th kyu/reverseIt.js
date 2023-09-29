function reverseIt(data){
  if (typeof data == "string")
    return data.split("").reverse().join("")
  if (typeof data == "number")
    return +data.toString().split("").reverse().join("")
  return data
 }
// typeof returns t/f
// .split() returns array
// .reverse() reverse array index
// .join() return string
// .toString() return as string
