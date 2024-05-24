function arrayConversion(arr) {
  for (let i=0;; i++) {
    if (i%2==0) arr=arr.map((e,i)=>e+arr[i+1]).filter((e,i)=>i%2==0)
    if (i%2!==0) arr=arr.map((e,i)=>e*arr[i+1]).filter((e,i)=>i%2==0)
    if (arr.length==1) return arr[0]
  }
}
