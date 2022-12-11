function swap (string) {
  return string.replace(/[aeiou]/g, e => e.toUpperCase())
}

// .replace() replaces with, can be a function
// REGEX /[]/ elements to replace
// REGEX //g global replaces all
// .toUpperCase() returns capital
