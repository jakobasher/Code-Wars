function isolateIt(arr){
  return arr.map( e => {
    let mid = Math.floor(e.length/2)
    return e.length%2 == 0 
      ? e.slice(0,mid) + "|" + e.slice(mid)
      : e.slice(0,mid) + "|" + e.slice(mid+1)
  })
}
// Math.floor() round down
// .slice() returns portion of array
