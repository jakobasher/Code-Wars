function duplicates(arr) {
  let duplicates = []
  let uniqueElements = new Set()
  
  for (let i=0; i<arr.length; i++) {
    let element = arr[i];
    if (uniqueElements.has(element) && !duplicates.includes(element)) {
      duplicates.push(element)
    } else {
      uniqueElements.add(element)
    }
  }
  return duplicates
}
// .has() returns t/f
// .includes() returns t/f if element included
// .push() adds element to array
// .add() adds new element to set
// 
