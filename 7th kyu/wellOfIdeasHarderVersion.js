function well(x){
  let arr = x.flat(Infinity).filter(e=>e.toString().toLowerCase()=="good")
  return arr.length == 0 ? "Fail!" : arr.length < 3 ? "Publish!" : "I smell a series!"
}
// .flat() Opens sub arrays, all nth degrees in this case
// .filter() returns copy of array
// .toString() element as string
// .toLowerCase() returns string as lower case
