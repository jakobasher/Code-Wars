function fixParentheses(str) {
  let open = 0
  let close = 0

  for (let char of str) {
    if (char == '(') {
      close++
    } else 
      if (char == ')') {
        if (close > 0) {
          close--
        } else {
          open++
        }
      }
    }
  return '('.repeat(open) + str + ')'.repeat(close)
}
