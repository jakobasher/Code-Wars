function numberToPrice (number) {
  if (typeof number !== 'number') return 'NaN'
  let [integerPart, decimalPart = '00'] = number.toString().split('.')
  let formattedInteger = parseInt(integerPart).toLocaleString('en-US')
  let formattedDecimal = decimalPart.length < 2 ? decimalPart + '0' : decimalPart.slice(0, 2)
  return formattedInteger + '.' + formattedDecimal
}
// .toString() return as string
// .split() return as array, split by "." in this case, if no decimal, then decimalPart = "00"
// parseInt() return integer formated to remove leading 0s
// .toLocaleStringe() converts integer into formated string based on locale
// .slice() Ternary to determine if decimal is one number, add trailing zero, otherwise slice used to return first two
