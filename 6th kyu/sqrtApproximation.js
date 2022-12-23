function sqrtApproximation(number) {
  let num = findSqrt(number)
  return num < 1 
    ? 0 
    : number%num==0 
      ? num 
      : [Math.floor(num), Math.ceil(num)]
}

const square = (n, i, j) => {
   let mid = (i + j) / 2;
   let mul = mid * mid;
   if ((mul === n) || (Math.abs(mul - n) < 0.00001)){
      return mid;
   }else if (mul < n){
      return square(n, mid, j);
   }else{
      return square(n, i, mid);
   }
}
// Function to find the square root of n
const findSqrt = num => {
   let i = 1;
   const found = false;
   while (!found){
      // If n is a perfect square
      if (i * i === num){
         return i;
      }else if (i * i > num){
         let res = square(num, i - 1, i);
         return res;
      };
      i++;
   }
}

// Line 1-8 writen to run through another function
// Math.floor() Math.ceil() round down and up
