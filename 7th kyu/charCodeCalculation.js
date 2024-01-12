function calc(x){
  let total1 = x.toString().split("").map(e=>e.charCodeAt()).join("")
  let total2 = total1.replaceAll("7","1")
  return Array.from(total1).reduce((a,c) => a + +c, 0) -
         Array.from(total2).reduce((a,c) => a + +c, 0)
}
// .toString() return as string
// .split() return as array
// .map() Fn to each element in array
// .charCodeAt() returns ASCII value
// .join() return as string
// .replaceAll() replace all instances
// Array.from() creates copy from array like
// .reduce() adds all elements, in this case
