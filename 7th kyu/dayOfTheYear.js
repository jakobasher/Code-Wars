function toDayOfYear(arr) {
  return (new Date(arr[2],arr[1]-1,arr[0]).getTime() - new Date(arr[2],0,0).getTime())/1000/60/60/24
}
// converts date to number to subtract then return as days
