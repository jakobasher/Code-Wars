function findMissingLetter(array){
  let arr = array.map(e=>e.charCodeAt())
  let num
  for (let i=0; i<arr.length-1;i++){
    if (arr[i]+1!==arr[i+1]){
      num = arr[i]+1
    }
  }
  return String.fromCharCode(num)
}

// .map() Fn to each
// .charCodeAt() returns UTF16 number
// String.fromCharCode() returns UTF value
