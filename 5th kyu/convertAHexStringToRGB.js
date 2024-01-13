function hexStringToRGB(hexString) {
  hexString = hexString.replace(/^#/, '')
  let bigint = parseInt(hexString, 16)
  let r = (bigint >> 16) & 255
  let g = (bigint >> 8) & 255
  let b = bigint & 255
  return {r: r, g: g, b: b}
}
// .replace() REGEX replace if
// .parseInt() return as radii
