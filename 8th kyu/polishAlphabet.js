function correctPolishLetters (string) {
  let dia = {
    "ą": "a",
    "ć": "c",
    "ę": "e",
    "ł": "l",
    "ń": "n",
    "ó": "o",
    "ś": "s",
    "ź": "z",
    "ż": "z"
  }
  return string.split("").map(e=> dia[e] || e).join("")
}
// Create an object for key values
// If element exist as key value, return as value
