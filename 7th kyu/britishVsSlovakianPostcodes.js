function whichPostcode(postcode){
  postcode = postcode.trim()
  if (postcode.length == 6) {
    if (postcode[3] == " " &&
        !isNaN(postcode.charAt(0)) &&
        !isNaN(postcode.charAt(1)) &&
        !isNaN(postcode.charAt(2)) &&
        !isNaN(postcode.charAt(4)) &&
        !isNaN(postcode.charAt(5))) {
      return "SK"
    }
  }
  let gbArray = postcode.split(" ")
  if (gbArray.length == 2) {
    if (/^[a-zA-Z]$/.test(gbArray[0][0]) &&
        !isNaN(gbArray[0].charAt(2)) && 

        !isNaN(gbArray[1].charAt(0)) && 
        /^[a-zA-Z]$/.test(gbArray[1][1]) &&
        /^[a-zA-Z]$/.test(gbArray[1][2])) 
      return "GB"
  }
  return "Not valid"
}
