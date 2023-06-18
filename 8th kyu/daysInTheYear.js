function yearDays(year){
  let days = year%400 == 0 
    ? 366 : year%100 ==0 
    ? 365 : year%4 == 0 
    ? 366 : 365
  return `${year} has ${days} days`
}
