const sumNested = arr => {
  return arr.flat(Infinity).reduce((a,c)=>a+c,0)
};
// .flat() opens array to nth degree, Infinity in this case opens all
// .reduce() adds all elements, in this case
