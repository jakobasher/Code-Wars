function addArrays(array1, array2) {
  if (array1.length !== array2.length) 
    throw new Error()
  return array1.map((e,i) => array1[i] = array1[i]+ array2[i])
}
// throw new Error() returns error / breaks
// .map() Fn array1 to equal array1+2, in this case
