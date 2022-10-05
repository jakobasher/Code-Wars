multiplicationTable = function(size) {
  let array = []
  let table = []
  for (let i=1; i<size+1; i++) {
    array.push(i)
  }
  for (let i=1; i<size+1; i++){
    table.push(array.map(e => e*i))
  } 
  return table
}

// .push() add element to end of array
// .map() Fn to each element
