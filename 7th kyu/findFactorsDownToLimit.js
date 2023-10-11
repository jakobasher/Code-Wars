function factors(integer, limit){
  let array = []
  for (let i=1; i<=integer; i++) {
    if (integer%i==0) {
      array.push(i)
    }
  }
  return array.filter(e=> e>=limit)
}
// .push() add element to end of array
// .filter() returns copy of array
