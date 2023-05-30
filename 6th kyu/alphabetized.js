function alphabetized(s) {
  let str = ""
  for (let i=97; i<123; ++i)
    for (let j=0; j<s.length; j++)
      if (s[j].toLowerCase().charCodeAt() == i) str += s[j]
  return str
}
// Loop through ASCII codes for lowercase letters (97 to 122)
// Loop through each character in the input string and heck if the lowercase version of the character has the current ASCII code
