function withdraw(n) {
  let arr = [0,0,0]
  while (n >= 20){
    if (n%50 == 0){break}
    n = n-20
    arr[2]++
  }
  while (n >= 100){
    n = n-100
    arr[0]++
  }
  while (n >= 50){
    n = n-50
    arr[1]++
  }
  return arr
}
