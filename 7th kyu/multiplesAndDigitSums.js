function procedure(n){
  let array = []
  let num = n
  while (num<=100) {
    array.push(num)
    num+=n
  }
  return array.map(e=>e.toString().split("")).flat().map(Number).reduce((a,c)=>a+c,0)
}
// Given a number, make array with multiples until <= 100
// while loop, while true continues
// .push() add element to end of array
// .map() Fn to element
// .toString() return as string
// .split() return as array
// .flat() opens array 
// .reduce() adds index, in this case
