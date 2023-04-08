function validParentheses(parenStr) {
  const stack = [];

  for (let i = 0; i < parenStr.length; i++) {
    const char = parenStr[i];

    if (char === '(') {
      stack.push(char);
    } else if (char === ')') {
      if (stack.length === 0 || stack.pop() !== '(') {
        return false;
      }
    }
  }

  return stack.length === 0;
}
// .push() add element to end of array
// .pop() removes last element from end of array
