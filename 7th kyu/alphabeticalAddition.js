function addLetters(...letters) {
  let num = letters.map(e=>e.charCodeAt()-96).reduce((a,c)=>a+c,0)%26
  let letter = String.fromCharCode(num + 64).toLowerCase() 
  return letter == "@" ? "z" : letter
}

// .map() Fn each element
// .charCodeAt() return UTF-16
// .fromCharCode() return string
// .toLowerCase() return lower case
