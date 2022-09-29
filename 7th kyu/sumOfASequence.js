const sequenceSum = (begin, end, step) => {
  let array = [begin]
  for (let i = begin+step; i<end+1; i=i+step){
    if (i<end+1){
      array.push(i)
    }
  }
 return begin - end > 0 ? 0 : array.reduce((a,c)=>a+c,0)
}

// .push() add to end of array
// .reduce() adds all elements
