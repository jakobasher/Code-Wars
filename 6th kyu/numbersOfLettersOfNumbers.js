function digitToWord(digit) {
  let words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  return words[digit]
}

function numbersOfLetters(integer) {
  let str = [...integer.toString()].map(e => digitToWord(+e)).join('')
  if (str == "four") {
    return [str]
  }
  return [str, ...numbersOfLetters(str.length)]
}
