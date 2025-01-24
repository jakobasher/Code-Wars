function countNumber(n, x) {
  let count =0;
  for (let i=1; i<=n; i++){
	  if (x%i==0 && x/i <= n) count++
  }
  return count
}
