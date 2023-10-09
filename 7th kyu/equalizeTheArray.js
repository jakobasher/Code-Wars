function equalize(array){
  return array.map(e =>
    e - array[0] < 0 
      ? `${e - array[0]}` 
      : `+${e - array[0]}`
  )
}
// .map() Fn to each element
// Tough one
