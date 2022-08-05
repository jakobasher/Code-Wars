function switcheroo(x){
  return x.split("").map(e => {
    if (e=="a") return "b"
    if (e=="b") return "a"
    return e
  }).join("")
  
  
}

// .split() string to array
// .map() function each element
