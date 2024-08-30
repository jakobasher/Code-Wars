function process2Arrays(arr1, arr2) {
   let n1 = arr1.filter((e)=>arr2.includes(e)).length
   let n3 = arr1.filter((e)=>!arr2.includes(e)).length
   let n4 = arr2.filter((e)=>!arr1.includes(e)).length
   let n2 = n3+n4
    return [n1,n2,n3,n4]
}
