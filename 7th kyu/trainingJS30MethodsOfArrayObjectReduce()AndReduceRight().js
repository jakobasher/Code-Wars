function tailAndHead(arr){
  let arrFirst = arr.map(e=>+e.toString().split("")[0]).slice(1)
  let arrLast = arr.map(e=>e%10).slice(0,-1) 
  let arrSum = []
  for (let i=0; i<arrFirst.length; i++) {
    arrSum.push(arrFirst[i] + arrLast[i])
  }
  return arrSum.reduce((a,c)=>a*c,1)
}
// .map() Fn to each element
// .toString() return as string
// .split() return as array
// .slice() return portion of array, (1) removes first, (0,-1) removes last
// %10, last digit
// .push() add to end of array
// .reduce() multiply array elements, in this case
