function disemvowel(str) {
  return str.replace(/[aeiou]/gi, "")
}

// .replace() replaces first instances
// REGEX /g -- modifier all instances
// REGEX /g -- case insensitive
// REGEX /[]/ -- every character between brackets
