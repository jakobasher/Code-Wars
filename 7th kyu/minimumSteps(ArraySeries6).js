function minimumSteps(numbers, value){
  let array = numbers.sort((a,b)=>a-b)
  for (let i=1; i<=array.length; i++) {
    if (array.slice(0,i).reduce((a,c)=>a+c,0) >= value) {
      return i-1
    }
  }
}
