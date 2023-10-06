function flickSwitch(arr){
  let flick = true
  let array = []
  for (let i=0; i<arr.length; i++) {
    if (arr[i]=="flick") {
      flick = !flick
      array.push(flick)
    } else {
      array.push(flick)
    }
  }
  return array
}
// .push() add to end of array
// TRY .map() ? can equal
