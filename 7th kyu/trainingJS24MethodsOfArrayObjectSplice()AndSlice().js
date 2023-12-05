function threeInOne(arr){
  let arr2 = []
  for (let i=0; i<arr.length; i+=3) {
    arr2.push(arr.slice(i,i+3).reduce((a,c)=>a+c,0))
  }
  return arr2 
}
// .slice() makes a copy portioned array
// .splice() modifies array
