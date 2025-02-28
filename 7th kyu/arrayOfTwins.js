function twins(myArray){
  let countMap = new Map()
  
  for (let num of myArray) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }
  
  for (let count of countMap.values()) {
    if (count !== 2) {
      return false
    }
  }
  return true;
}
