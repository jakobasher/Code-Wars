function findOdd(a) {
  
  for (let i = 0; i < a.length; i++){
    let count = a.filter(e => e == a[i]).length;
    if (count%2 == 1) {
      return a[i];
    }
  }
  return -1;
}
