function vowelOne(s){
  let str = ""
  for (let i=0; i<s.length; i++){
    if (s[i].toLowerCase() == "a") {str+=1} else
    if (s[i].toLowerCase() == "e") {str+=1} else
    if (s[i].toLowerCase() == "i") {str+=1} else
    if (s[i].toLowerCase() == "o") {str+=1} else
    if (s[i].toLowerCase() == "u") {str+=1} else 
    {
      str+=0
    }
  }
  return str
}

// Brute force
// .toLowerCase() returns as lower case
