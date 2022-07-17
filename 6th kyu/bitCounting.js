var countBits = function(n) {
  return n.toString(2).split("").map(e=>Number(e)).reduce((a,c)=>a+c,0)
  
};

// .toString(2) intger to binary
// .split("") returns array
// .map() go through each element in array, returns new array
// .reduce() adds up ones
