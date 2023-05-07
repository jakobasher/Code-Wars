function encode(str) {
  return str
    .split('')
    .map(e=>/[a-z]/gi.test(v) 
         ? e.toLowerCase().charCodeAt()-96 
         : e
        )
    .join('')
}
// .split() return array from string
// .map() Fn to each element, test if letter, return as UTF else return letter
// .join() return as string
