function isHex(str) {
  if (str.length !== 6 && str.length !== 3) {
    return false;
  }
  for (let i=0; i<str.length; i++) {
    if (/[g-zG-Z]/.test(str[i])) {
      return false;
    }
  }
  return true
}
/// .test() returns true if match
