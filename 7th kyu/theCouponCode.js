function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  return enteredCode === correctCode 
    ? Date.parse(currentDate) <= Date.parse(expirationDate) 
      ? true 
      : false 
  : false
}
// Date.parse() returns date as milliseconds
