function repeats(arr){
  let count = {}
  for (let key of arr) {
    count[key] = (count[key] || 0) + 1
  }
  return Object.keys(count)
    .filter(key => count[key] == 1)
    .reduce((a,c)=> a + +c,0)
}
// for of loop, used to from object
// .filter() used to key values of 1, 
// .reduce() adds all keys, in this case
