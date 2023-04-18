function arraysSimilar(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  
  let counts = new Map();
  
  for (let i = 0; i < arr1.length; i++) {
    const element = arr1[i];
    counts.set(element, (counts.get(element) || 0) + 1);
  }
  
  for (let i = 0; i < arr2.length; i++) {
    const element = arr2[i];
    if (!counts.has(element) || counts.get(element) === 0) {
      return false;
    }
    counts.set(element, counts.get(element) - 1);
  }
  
  return true;
}
// /First check if arrays are similar length
// Create an object hold the count
// If arr2 exist or != 0 then return true
