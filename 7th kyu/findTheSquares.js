const findSquares = num => {
  let n1 = Math.ceil(num/2)**2
  let n2 = Math.floor(num/2)**2
  return  `${n1}-${n2}`
};
