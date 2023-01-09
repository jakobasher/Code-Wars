function getSum(a,b){
   let arr = []
   let max = Math.max(a,b)
   let min = Math.min(a,b)
   for (let i=min; i<=max; i++) {
     arr.push(i)
   } 
   return arr.reduce((a,c)=>a+c,0)
}
// Math.max() returns highest value
// Math.min() returns lowest value
// .push() add element to end of array
// .reduce() adds all elements, in this case
