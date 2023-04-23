function spacey(array){
  let str = ""
  for (let i=0; i<array.length; i++) {
    str += array[i]
    array[i] = str
  }
  return array
}
