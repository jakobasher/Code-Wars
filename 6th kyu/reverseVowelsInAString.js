function reverseVowels (str) {
  let vowels = str.replace(/[^aeiou]/gi, '').split('')
  return str.replace(/[aeiou]/gi, _ => vowels.pop())
}
// .replace() replace characters with  specified value
// .split() returns array from string
// .pop() removes last element from array, replaces current with last
