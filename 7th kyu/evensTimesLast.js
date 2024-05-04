function evenLast(numbers) {
  if (numbers.length == 0) return 0
  return numbers.filter((e,i)=>i%2==0).reduce((a,c)=>a+c,0) * numbers[numbers.length-1]
}
