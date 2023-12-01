function topSecret(str){
  const array1 = "abcdefghijklmnopqrstuvwxyz"
  const array2 = array1.toUpperCase()

  return str.replace(/[a-zA-Z]/g, v => {
    let isLowerCase = v === v.toLowerCase()
    let array = isLowerCase ? array1 : array2
    let index = array.indexOf(v)
    const shiftedIndex = (index - 3 + 26) % 26
    return array[shiftedIndex]
  });
}
//question1: The top secret file number is...
const answer1="3745"
//question2: Super agent's name is...
const answer2="RILc"
//question3: He stole the treasure is...
const answer3="Expired biscuits"

// .toUpperCase() return str all capital
// .replace() checks to see if alphabet
// .toLowerCase() return str as lower case
// Returns t/f into array1 or array2, gets the index value and shifts it
