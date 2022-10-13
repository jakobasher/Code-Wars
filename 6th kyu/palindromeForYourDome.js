function palindrome(string) {
  let str = string
    .split("")
    .filter(char => /[a-zA-Z]/.test(char))
    .join("")
    .toLowerCase()
  let revStr = str
    .split("")
    .reverse()
    .join("")
  return str == revStr ? true : false
}

// .split() returns array from string
// .filter() returns filtered copy of aray
// /[a-zA-Z]/ REGEX 26 letters x2
// .test() REGEX returns true if matches
// .join() returns string from array
// .toLowerCase() returns lower case letters
