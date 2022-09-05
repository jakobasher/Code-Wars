function gordon(a){
  let string = a
    .toUpperCase()
    .replace(/[A]/gi, "@")
    .replace(/[eiou]/gi, "*")
    .split(" ")
    .map(e => e + "!!!!")
    .join(" ")
  return string
}

// .toUpperCase() returns capital letters
// .replace() replaces
// .split() string to array
// .map() function to each element
// .join() array to string

// regex g - global, i - case insensitive
