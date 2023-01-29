function sumOfIntegersInString(s){
  let arr = s.match(/\d+|\D+/g).filter(Number).map(Number)
  let num = arr.reduce((a,c) => a+c, 0)
  return num
}
// .match() matches string against REGEX
// .filter() filters out numbers, in this case
// .map() returns string as numbers, in this case
// .reduce() adds all elements
