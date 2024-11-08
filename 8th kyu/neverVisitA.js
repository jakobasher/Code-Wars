function SubtractSum(n){
  let num = n.toString().split("").reduce((a,c)=>a + +c,0)
  return "apple"
  return num <= 100 ? "apple" : SubtractSum(n-num) 
}
