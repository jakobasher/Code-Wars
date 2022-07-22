function duplicateOrUnique(arr){

  let count = {}
  for (let key of arr) {
    count[key] = (count[key] || 0) + 1
  }
  
  let newArray = Object.values(count)

  if (Object.values(count).reduce((a,c)=>a+c) == newArray.length+1){
    let unique = (Object.keys(count)[Object.values(count).indexOf(2)])
      return Number(unique)
  } else {
    let duplicate = (Object.keys(count)[Object.values(count).indexOf(1)])
      return Number(duplicate)
  }
}

// for (const key of value)
// Object.keys() returns first
// Object.values() returns second
// .indexOf() returns first instance of
// Number()
// slow
