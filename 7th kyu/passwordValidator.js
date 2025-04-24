function password(str) {
  if (!/[A-Z]/.test(str)) return false
  if (!/[a-z]/.test(str)) return false
  if (!/[0-9]/.test(str)) return false
  if (str.length < 8) return false
  return true
}
