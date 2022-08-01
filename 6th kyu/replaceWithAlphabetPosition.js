function alphabetPosition(text) {
  
  let result = ""
  for (let i = 0; i<text.length; i++) {
    let code = text.toLowerCase().charCodeAt(i)
    if (code > 96 && code < 123) {
      result += (code - 96) + " "
    }
  }
  
  return result.slice(0,-1)
  
  
}

// .toLowerCase() returns lower case
// .charCodeAt() returns integer from UTF-16 code 
// https://string-functions.com/encodingtable.aspx?encoding=1200&decoding=20127

// can also use .toUpperCase(), 64 < code < 91, offset by 64 instead of 96
