function evenAndOdd(num){
  let even = num.toString().split("").filter((e,i)=>e%2==0).join("")
  let odd = num.toString().split("").filter((e,i)=>e%2!==0).join("")
  return [+even,+odd];
}
// .toString() return as string
// .split() return as array
// .filter() returns filtered array
// .join() return as string
// +var return as number
