function encode(string) {
  let newString = "" 
      string.split("").forEach(e => {
        if (e == "a") {newString+=1} else
        if (e == "e") {newString+=2} else
        if (e == "i") {newString+=3} else
        if (e == "o") {newString+=4} else
        if (e == "u") {newString+=5} else
          newString += e
      })
   
  return newString

}

function decode(string) {

  return string
    .replace(1,"a")
    .replace(2,"e")
    .replace(3,"i")
    .replace(4,"o")
    .replace(5,"u")

}

// .split() returns array
// .forEach() go through array
// .replace()
