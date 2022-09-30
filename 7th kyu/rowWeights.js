function rowWeights(array){
  let row1 = array.filter((e,i)=>i%2==0).reduce((a,c)=>a+c,0)
  let row2 = array.filter((e,i)=>i%2==1).reduce((a,c)=>a+c,0)  
  return [row1,row2]
}

// .filter() returns filtered copy of array
// .reduce() adds all elements
