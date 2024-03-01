function reverseAndMirror(s1,s2) {
  s1 = reverseCase(s1)
  s2 = reverseCase(s2)
  return [...s2.reverse(),"@","@","@",...s1.reverse(),...s1.reverse()].join("")
}

function reverseCase(str) {
    return str.split("").map(e => {
      if (e == e.toUpperCase())
        return e.toLowerCase()    
      return e.toUpperCase()  
    })
}
// String manipulation, create outside function to organize
// .reverse() reverses array index
// ... spread syntax
// .join() return as string
// .split() return as array
// .map() Fn to each element
// .toUpperCase() .toLowerCase()
