function authList(arr) {
  return arr.map(str => {
    let lengthValid = str.length >= 6 && str.length <= 10
    let lowerCaseValid = /[a-z]/.test(str)
    let numberValid = /[0-9]/.test(str)
    let alphanumericValid = /^[a-z0-9]+$/.test(str)
    return lengthValid && lowerCaseValid && numberValid && alphanumericValid
  }).every(e=>e==true)
}
// check all 4 cases, if all true return true
