function loneliest(str) {
  str = str.trim()
  let obj = {}
  for (let i=0; i<str.length; i++) {
    if (str[i] !== " ") {
      let count = 0
      for (let j=1; j<str.length; j++) {
        if (str[i+j] == " ") {
          count++
        } else {
          break
        }
      }
      for (let j=1; j<str.length; j++) {
        if (str[i-j] == " ") {
          count++
        } else {
          break
        }
      }
      obj[str[i]] = count
    }
  }
  console.log(obj)
  let max = Math.max(...Object.values(obj))
  let arr = []
  for (let key in obj) {
    if (obj[key] == max) {
      arr.push(key)
    }
  }
  return arr
}
// .trim() removes leading/trailing spaces, since not counted here
// Create a loop to cycle through to each non " ", when true, creates a count
// Creates another loop to cyle through until non " "
// Add an object at end of the loop
// Math.max() returns highest value(s) of iterible list,
// ... spread syntax
// Object.values() returns the values from the key-values from an object
// For in loop, cycle through object to find matching max value, add key from value to array
