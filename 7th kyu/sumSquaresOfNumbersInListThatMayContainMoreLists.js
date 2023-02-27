function SumSquares(l){
    return l.flat(Infinity).reduce((a,c) => a+c*c, 0)
}
// .flat() opens array to nth degree, Infinity all in this case
// .reduce() adds up array squared, in this case
