const sumSquareEvenRootOdd = ns => {
  return +ns.map((e)=> e%2==0 ? e*e : Math.sqrt(e)).reduce((a,c)=>a+c,0).toFixed(2)
};
// .map() Fn to each element
// +var return as number
// .reduce() adds all elements, in this case
// .toFixed() returns to decimal place
// Can try e**2 and e**0.5 for pow and sqrt
