function scale(strng, k, n) {

    return strng
      .split("\n")
      .map(e => (e.split("").map(e => e.repeat(k)).join("")+"\n")
           .repeat(n))
      .join("")
      .trim()

  
}

// .split() string to array
// .map() function to each element
// .repeat() repeat 
// .join() array to string
// .trim() removes white spaces from front and back
