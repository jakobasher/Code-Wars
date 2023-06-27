function outed(meet, boss){
  let num = Object.values(meet).reduce((a, c) => a + c, 0) + meet[boss]
  let average = num / Object.keys(meet).length
  return average <= 5 
    ? 'Get Out Now!'
    : 'Nice Work Champ!'
}
// Object.values() to get array of all values in object
// .reduce() add all elements, + boss again since worth double
// Object.keys().length to divide by average
