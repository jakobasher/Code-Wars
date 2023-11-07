function onlyOne() {
  return [...arguments].filter(Boolean).length == 1
}
// ... spread syntax, used to make iterible args
// .filter(Boolean) used to filter falsy values, including false, null, undefined, 0, NaN, and ""
