function arrayLeaders(numbers){
  let array = []
  for (let i = 0; i<numbers.length; i++) {
    if (numbers[i] > numbers.slice(i+1).reduce((a,c)=>a+c,0))
      array.push(numbers[i])
  }   
  return array
}

// .slice() returns a copy portion of array
// .reduce() returns sum of all elements in array
// .push() adds element to end of array

// Try .filter() next time
