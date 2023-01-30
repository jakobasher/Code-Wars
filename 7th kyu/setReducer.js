function setReducer(input) {
 let arr = []
 let arr2 =[]
 for (let i=0; i<input.length; i++) {
   arr2.push(input[i])
   if (input[i+1] !== input[i]) {
     arr.push(arr2)
     arr2 =[]
   }
 }
   let arr3 = (arr.map(e=>e = e.length))
   return arr3.length == 1 ? arr3[0] : setReducer(arr3)
}

// .push() adds elements to end of array
// .map() Fn to each element, array -> array length, in this case
// Ternary, 1 element return number, else loops
