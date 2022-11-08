function deleteNth(arr,n) {
  let count = {}
  return arr.filter(e => {
    count[e] = (count[e] || 0) + 1 
    return count[e] <= n
  })
}

// {} created an empty object to count
// (count[e] || 0)+1 fetches object if exist OR creates object, then +1
// .filter() goes through each element, if filter of object is true, returns value
