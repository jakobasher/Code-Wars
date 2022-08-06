function high(x){
  let highest = 0
  let index = 0
  let string = x.split(" ")
  
  for (let i = 0; i < string.length; i++){
    let word = string[i].split("").map(e => e.charCodeAt()-96).reduce((a,c) => a+c, 0)
    if (word > highest) {
      highest = word
      index = i
    }
  } 
    
  return string[index]


}

// .split() string to array
// .map() function each element
// .charCodeAt() element to UTF-16
