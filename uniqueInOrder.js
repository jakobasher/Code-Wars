var uniqueInOrder=function(iterable){
  
  let array = Array.isArray(iterable) ? iterable : iterable.split('');
  let newArray = array.filter((e,i) => {
    return array[i] !== array[i+1]
  })
  
  return newArray
  
  
}

// Array.isArray() returns true if array
// .filter() returns element based on function
