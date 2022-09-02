function last(x){
  return x.split(" ").sort((a,b) => a.charCodeAt(a.length-1) - b.charCodeAt(b.length-1))
}

// .split() string to array
// .sort() sort array 
// .charCodeAt() returns index value
