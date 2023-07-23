function vowelStart(str){
 return str.toLowerCase()
   .replace(/[^a-zA-Z0-9]/g, '')
   .replaceAll(" ","")
   .replaceAll("a", " a")
   .replaceAll("e", " e")
   .replaceAll("i", " i")
   .replaceAll("o", " o")
   .replaceAll("u", " u")
   .trim()
}
// .toLowerCase() return as lower case
// .replace() returns letters and numbers in this case
// .replaceAll() replace every instance
// .trim() removes space at begin and end
