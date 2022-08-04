function wordsToMarks(string){
  
  return string.split("").reduce((a,c) => a + c.charCodeAt()-96, 0)


}

// .split() returns array
// .reduce() function total up array elements
// .charCodeAt() returns integer based on UTF-16
// https://string-functions.com/encodingtable.aspx?encoding=1200&decoding=20127
