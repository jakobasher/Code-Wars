function sizeToNumber(size) {
  let obj = {xxxs: 30, xxs: 32,xs: 34, s: 36, m: 38, l: 40, xl: 42, xxl: 44, xxxl:46}
  return obj[size] || null
}
